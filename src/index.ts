import BodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import router from "./router/mainRouter";
import rateLimit from "express-rate-limit";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import nodemailer from "nodemailer";
import redis from "ioredis";

dotenv.config();

export const redisClient = new redis(process.env.REDISLINK!);

redisClient.on("connect", () => console.log("✅ Connected to Redis"));
redisClient.on("error", (err) => console.error("❌ Redis Error:", err));

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mnyctcofficial@gmail.com",
    pass: process.env.PASSWORD_GMAIL,
  },
});

const app = express();
const PORT = 3001;

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
app.use(generalLimiter);
app.use(BodyParser.json());
app.use(cookieParser(process.env.COOKIEP));
app.use(
  cors({
    origin: process.env.CORSORIGIN,
    credentials: true,
  })
);

app.get("/generate-presigned-url", async (req, res) => {
  try {
    const fileName = req.query.fileName as string;
    const fileType = req.query.fileType as string;
    const category = req.query.category as string;

    const Key = `images/${category}/${fileName}`;

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
app.get("/temp", (req, res) => {
  res.json({ answer: "hello" });
});
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
