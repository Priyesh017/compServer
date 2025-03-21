import { pino } from "pino";
import pretty from "pino-pretty";
import { createStream } from "rotating-file-stream";
import fs from "fs";
import dotenv from "dotenv";
import dayjs from "dayjs";

dotenv.config();

// Ensure logs directory exists
const logDirectory = "./logs";

if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

// ✅ Log Rotation Setup (for log files)
const accessLogStream = createStream(
  `app-${new Date().toISOString().split("T")[0]}.log`,
  {
    interval: "1d", // Rotate logs daily
    path: logDirectory, // Directory for log storage
    maxFiles: 7, // Retain logs for the last 7 days
  }
);

const errorLogStream = createStream("error.log", {
  interval: "1d",
  path: logDirectory,
  maxFiles: 7,
});

// ✅ Pretty Console Log Output (for readability during dev)
const prettyStream = pretty({
  translateTime: "SYS:dd-mm-yyyy HH:MM:ss",
  ignore: "pid,hostname",
  colorize: true,
});

// ✅ Separate Streams for Console & File Logging
const streams = [
  { stream: prettyStream }, // Console output (pretty)
  { level: "info", stream: accessLogStream }, // Info logs in app.log
  { level: "error", stream: errorLogStream }, // Errors in error.log
];
const customTimestamp = () =>
  `,"time":"${dayjs().format("DD-MM-YYYY HH:mm:ss")}"`;

// ✅ Create Logger with Multiple Streams
const logger = pino(
  {
    level: process.env.LOG_LEVEL || "info", // Default level from .env
    formatters: {
      bindings() {
        return {};
      },
      level: (label) => ({ level: label.toUpperCase() }), // Format level labels
    },
    timestamp: customTimestamp,
  },
  pino.multistream(streams) // Combine multiple output streams
);

export default logger;
