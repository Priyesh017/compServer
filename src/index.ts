import BodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import router from "./router/mainRouter";
import rateLimit from "express-rate-limit";

const app = express();
const PORT = 3001;

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 500, // Limit each IP to 100 requests
  message: "Too many requests, please try again later.",
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
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
