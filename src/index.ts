import BodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import router from "./router/mainRouter.js";
import rateLimit from "express-rate-limit";
import {
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Redis } from "ioredis";
import { prisma } from "./client.js";
import helmet from "helmet";
import logger from "./logger.js";
import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_KEY);

dotenv.config();

export const redisClient = new Redis(process.env.REDIS_UPSTASH!);

redisClient.on("connect", () => logger.info("Connected to Redis"));
redisClient.on("error", (err) => logger.error("Redis Error:", err));

const app = express();
const PORT = 3001;
app.set("trust proxy", 1);

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 500, // Limit each IP to 100 requests
  message: "Too many requests, please try again later.",
});

export const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});
const allowedOrigins = [
  process.env.CORSORIGIN,
  process.env.CORSORIGIN2,
  process.env.CORSORIGIN3,
];

app.use(helmet());
app.use(generalLimiter);
app.use(BodyParser.json());
app.use(cookieParser(process.env.COOKIEP));
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.get("/generate-presigned-url", async (req, res) => {
  try {
    const { fileName, category } = req.query;

    const fileType = req.query.fileType as string;
    const keypart = fileType.split("/")[0];

    if (!fileName || !fileType || !category) {
      res.status(400).json({ error: "Missing required query parameters" });
      return;
    }

    const Key = `${keypart}s/${category}/${fileName}`;

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: Key,
      ContentType: fileType,
      // ACL: "public-read",
    });

    const url = await getSignedUrl(s3, command, { expiresIn: 60 });

    res.json({ url });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.post("/fetch_aws_res", async (req, res) => {
  try {
    const { Prefix } = req.body;

    const command = new ListObjectsV2Command({
      Bucket: process.env.AWS_BUCKET_NAME,
      Prefix,
    });

    const data = await s3.send(command);

    const imageUrls =
      data.Contents?.map((item) => {
        if (!item.Key) return null;
        return `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${item.Key}`;
      }).filter(Boolean) || [];

    res.json({ data: imageUrls });
  } catch (error) {
    logger.error(error);
  }
});

app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

app.post("/log", (req, res) => {
  logger.info(req.body.message);
  res.sendStatus(200);
});

app.use(router);

app.use((_, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err: any, _: Request, res: Response) => {
  logger.error(err);
  res.json({ error: "Internal Server Error" });
});

process.on("SIGINT", async () => {
  logger.error("Shutting down gracefully...");
  await redisClient.quit();
  await prisma.$disconnect();
  process.exit(0);
});

// ✅ Start Server
app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
