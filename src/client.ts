import { S3Client } from "@aws-sdk/client-s3";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

declare module "express" {
  interface Request {
    myProp?: string;
  }
}

export const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_REGION!,
    secretAccessKey: process.env.AWS_REGION!,
  },
});
