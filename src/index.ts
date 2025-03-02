import BodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import router from "./router/mainRouter";
import rateLimit from "express-rate-limit";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

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

    const command = new PutObjectCommand({
      Bucket: "your-bucket-name",
      Key: fileName,
      ContentType: fileType,
      ACL: "public-read",
    });

    const url = await getSignedUrl(s3Client, command, { expiresIn: 60 });

    res.json({ url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
