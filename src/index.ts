import BodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import router from "./router/mainRouter";

const app = express();
const PORT = 3001;

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
