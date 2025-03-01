import { CookieOptions, Response } from "express";
import jwt from "jsonwebtoken";
import fs from "fs";
import { PDFDocument, rgb } from "pdf-lib";
import QRCode from "qrcode";
import sharp from "sharp";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "./client";

interface ftype {
  enrollNo: string;
  stuName: string;
  fName: string;
  courseCode: string;
  atiCode: string;
  ecCode: string;
}

interface dtype {
  sName: string;
  cName: string;
  idCardNo: string;
  enrollmentNo: string;
  address: string;
  centerName: string;
}
interface ctype {
  sName: string;
  sdwName: string;
  courseName: string;
  duration: string;
  year: string;
  grade: string;
  enrollNo: string;
  centerName: string;
  iDate: string;
  Branch: string;
  GrandTotal: string;
}

async function makeCircularImage() {
  const inputPath = "files/temp.jpg"; // Replace with your square image
  const outputPath = "circle.png"; // Output will be a PNG (supports transparency)

  // Load image and get dimensions
  const metadata = await sharp(inputPath).metadata();

  const size = Math.min(metadata.width ?? 0, metadata.height ?? 0); // Use the smaller side for a perfect circle

  // Create a circular mask
  const circleMask = Buffer.from(`
    <svg width="${size}" height="${size}">
      <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/>
    </svg>
  `);

  // Apply the circular mask to the image
  await sharp(inputPath)
    .resize(size, size) // Make it a square if it's not already
    .composite([{ input: circleMask, blend: "dest-in" }]) // Apply mask
    .png() // Output as PNG to keep transparency
    .toFile(outputPath);

  console.log(`Circular image saved as ${outputPath}`);
}

export const formatDateForJS = (date: string) => {
  const formatted = date.replace(/(\d{2})(\d{2})(\d{4})/, "$3-$2-$1"); // Convert "DDMMYYYY" to "YYYY-MM-DD"
  return new Date(formatted);
};

export const accessTokenCookieOptions: CookieOptions = {
  maxAge: 900000 * 4, // 15 mins
  httpOnly: true,
  sameSite: "none",
  secure: true,
  signed: true,
};

export const Cookiehelper = (res: Response, user: any) => {
  const { password: m, ...userWithoutPassword } = user;
  const token = jwt.sign(userWithoutPassword, process.env.TOKEN_SECRET!, {
    expiresIn: "1h",
  });
  res
    .cookie("accessToken", token, accessTokenCookieOptions)
    .status(200)
    .json({ message: "Login successful", user: userWithoutPassword });
};

export async function fillCertificate({
  sName,
  sdwName,
  courseName,
  duration,
  year,
  grade,
  enrollNo,
  centerName,
  iDate,
  Branch,
  GrandTotal,
}: ctype) {
  // it will take id parameter
  // Load the existing PDF
  const studentData = {
    Name: sName,
    EnrollmentNo: enrollNo,
    CourseName: courseName,
    Branch,
    GrandTotal,
  };
  const qrText = JSON.stringify(studentData);
  const qrCodeBuffer = await QRCode.toBuffer(qrText);

  const existingPdfBytes = fs.readFileSync("files/certificate.pdf");
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const imageBytes = fs.readFileSync("files/temp.jpg");

  // Get the first page
  const page = pdfDoc.getPages()[0];
  const pdfHeight = page.getHeight();

  // Embed QR Code image
  const qrImage = await pdfDoc.embedPng(qrCodeBuffer);
  const { width, height } = qrImage.scale(0.3); // Adjust QR size
  const image = await pdfDoc.embedJpg(imageBytes);
  // Position QR Code (adjust x, y as needed)
  console.log(width);

  page.drawImage(qrImage, {
    x: 50, // Adjust X position
    y: pdfHeight - 220, // Adjust Y position (PDF starts from bottom-left)
    width,
    height,
  });

  // Draw the image at a specific position (x, y)
  page.drawImage(image, {
    x: 475, // Adjust X position
    y: pdfHeight - 220, // Adjust Y position (PDF coordinates start from bottom-left)
    width,
    height,
  });
  // Set font size and position
  const fontSize = 18;
  page.drawText("123456", {
    x: 371,
    y: pdfHeight - 32,
    size: 12,
    color: rgb(0, 0, 0),
  });
  page.drawText(sName, {
    x: 231,
    y: pdfHeight - 265,
    size: fontSize,
    color: rgb(0, 0, 0),
  });
  page.drawText(sdwName, {
    x: 248,
    y: pdfHeight - 291,
    size: fontSize,
    color: rgb(0, 0, 0),
  });
  page.drawText(courseName, {
    x: 153,
    y: pdfHeight - 341,
    size: fontSize,
    color: rgb(0, 0, 0),
  });
  page.drawText(duration, {
    x: 145,
    y: pdfHeight - 367,
    size: fontSize,
    color: rgb(0, 0, 0),
  });
  page.drawText(year, {
    x: 472,
    y: pdfHeight - 367,
    size: 15,
    color: rgb(0, 0, 0),
  });
  page.drawText(grade, {
    x: 261,
    y: pdfHeight - 392,
    size: fontSize,
    color: rgb(0, 0, 0),
  });
  page.drawText(enrollNo, {
    x: 483,
    y: pdfHeight - 392,
    size: 15,
    color: rgb(0, 0, 0),
  });
  page.drawText(centerName, {
    x: 218,
    y: pdfHeight - 417,
    size: 16,
    color: rgb(0, 0, 0),
  });
  page.drawText(iDate, {
    x: 249,
    y: pdfHeight - 445,
    size: fontSize,
    color: rgb(0, 0, 0),
  });

  // Serialize the document and write it to a file
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync("filled_certificate.pdf", pdfBytes);

  console.log("PDF generated successfully: filled_certificate.pdf");
}

// {enrollNo,stuName,fName,courseCode,atiCode,ecCode}:ftype

export async function filladmit() {
  const existingPdfBytes = fs.readFileSync("files/admit.pdf");
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const imageBytes = fs.readFileSync("files/temp.jpg");
  const imageBytes2 = fs.readFileSync("files/sign.png");

  const page = pdfDoc.getPages()[0];
  const pdfHeight = page.getHeight();

  const image = await pdfDoc.embedJpg(imageBytes);
  const image2 = await pdfDoc.embedPng(imageBytes2);

  page.drawText("John Doe", {
    x: 165,
    y: pdfHeight - 156,
    size: 13,
    color: rgb(0, 0, 0),
  });

  page.drawText("John Doe", {
    x: 165,
    y: pdfHeight - 173,
    size: 13,
    color: rgb(0, 0, 0),
  });

  page.drawText("John Doe", {
    x: 165,
    y: pdfHeight - 190,
    size: 13,
    color: rgb(0, 0, 0),
  });

  page.drawText("John Doe", {
    x: 165,
    y: pdfHeight - 207,
    size: 13,
    color: rgb(0, 0, 0),
  });

  page.drawText("John Doe", {
    x: 165,
    y: pdfHeight - 224,
    size: 13,
    color: rgb(0, 0, 0),
  });

  page.drawText("John Doe", {
    x: 165,
    y: pdfHeight - 241,
    size: 13,
    color: rgb(0, 0, 0),
  });

  page.drawText("12/12/12", {
    x: 83,
    y: pdfHeight - 272,
    size: 8,
    color: rgb(0, 0, 0),
  });

  page.drawText("12:00", {
    x: 145,
    y: pdfHeight - 272,
    size: 8,
    color: rgb(0, 0, 0),
  });

  page.drawText("5th", {
    x: 208,
    y: pdfHeight - 272,
    size: 8,
    color: rgb(0, 0, 0),
  });

  page.drawText("12/12/12", {
    x: 83,
    y: pdfHeight - 289,
    size: 8,
    color: rgb(0, 0, 0),
  });

  page.drawText("12:00", {
    x: 145,
    y: pdfHeight - 289,
    size: 8,
    color: rgb(0, 0, 0),
  });

  page.drawText("5th", {
    x: 208,
    y: pdfHeight - 289,
    size: 8,
    color: rgb(0, 0, 0),
  });

  page.drawImage(image, {
    x: 390, // Adjust X position
    y: pdfHeight - 220, // Adjust Y position (PDF coordinates start from bottom-left)
    width: 90,
    height: 100,
  });

  page.drawImage(image2, {
    x: 277, // Adjust X position
    y: pdfHeight - 325, // Adjust Y position (PDF coordinates start from bottom-left)
    width: 45,
    height: 30,
  });
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync("filled_admit.pdf", pdfBytes);

  console.log("PDF generated successfully: filled_certificate.pdf");
}

export async function fillId({
  sName,
  cName,
  idCardNo,
  enrollmentNo,
  address,
  centerName,
}: dtype) {
  const existingPdfBytes = fs.readFileSync("files/id.pdf");
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const page = pdfDoc.getPages()[0];
  const pdfHeight = page.getHeight();
  const pdfWidth = page.getWidth();

  // await makeCircularImage();
  const imageBytes = fs.readFileSync("circle.png");

  const adjustCenteredTextPosition = (
    text: string,
    pdfWidth: number,
    pdfHeight: number,
    yOffset: number, // Allows positioning different texts at different heights
    baseFontSize: number = 80
  ) => {
    let fontSize = baseFontSize;
    const avgCharWidth = fontSize * 0.5; // Approximate character width (adjust if needed)
    const textWidth = text.length * avgCharWidth; // Estimate text width

    // Calculate X position to center the text
    const x = (pdfWidth - textWidth) / 2;

    // Adjust Y position with the given offset
    const y = pdfHeight - yOffset;

    return { x, y, size: fontSize };
  };

  const sNamePosition = adjustCenteredTextPosition(
    sName,
    pdfWidth,
    pdfHeight,
    940,
    80
  );
  const cNamePosition = adjustCenteredTextPosition(
    cName,
    pdfWidth,
    pdfHeight,
    1020,
    60
  );

  page.drawText(sName, {
    x: sNamePosition.x,
    y: sNamePosition.y,
    size: sNamePosition.size,
    color: rgb(0, 0, 0),
  });

  page.drawText(cName, {
    x: cNamePosition.x,
    y: cNamePosition.y,
    size: cNamePosition.size,
    color: rgb(0, 1, 0),
  });

  page.drawText(`ID NO: ${idCardNo}`, {
    x: 80,
    y: pdfHeight - 1100,
    size: 60,
    color: rgb(0, 0, 0),
  });

  page.drawText(`ENROLLMENT: ${enrollmentNo}`, {
    x: 70,
    y: pdfHeight - 1180,
    size: 60,
    color: rgb(0, 0, 0),
  });

  page.drawText(`ADDRESS: ${address}`, {
    x: 70,
    y: pdfHeight - 1260,
    size: 60,
    color: rgb(0, 0, 0),
  });

  page.drawText(`CENTER: ${centerName}`, {
    x: 70,
    y: pdfHeight - 1340,
    size: 60,
    color: rgb(0, 0, 0),
  });

  const Image = await pdfDoc.embedPng(imageBytes);
  const { width, height } = Image.scale(0.47); // Scale image

  page.drawImage(Image, {
    x: 340, // Adjust X position
    y: pdfHeight - 830, // Adjust Y position (PDF coordinates start from bottom-left)
    width,
    height,
  });

  page.drawText("2025 Benson street,Wausau", {
    x: 23,
    y: pdfHeight - 1540,
    size: 45,
    color: rgb(1, 1, 1),
  });

  page.drawText("ph:8981596525", {
    x: 690,
    y: pdfHeight - 1656,
    size: 45,
    color: rgb(1, 1, 1),
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync("filled_id.pdf", pdfBytes);

  console.log("PDF generated successfully: filled_id.pdf");
}

export async function fillMarksheet() {
  const existingPdfBytes = fs.readFileSync("files/marksheet.pdf");
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const page = pdfDoc.getPages()[0];
  const pdfHeight = page.getHeight();

  page.drawText("John Doe", {
    x: 156,
    y: pdfHeight - 218,
    size: 15,
    color: rgb(0, 0, 0),
  });

  page.drawText("John Doe", {
    x: 156,
    y: pdfHeight - 243,
    size: 15,
    color: rgb(0, 0, 0),
  });

  page.drawText("John Doe", {
    x: 156,
    y: pdfHeight - 269,
    size: 15,
    color: rgb(0, 0, 0),
  });

  page.drawText("John Doe", {
    x: 156,
    y: pdfHeight - 295,
    size: 15,
    color: rgb(0, 0, 0),
  });

  page.drawText("John Doe", {
    x: 156,
    y: pdfHeight - 320,
    size: 15,
    color: rgb(0, 0, 0),
  });

  const pdfBytes = await pdfDoc.save();

  // const params = {
  //   Bucket: process.env.AWS_BUCKET_NAME,
  //   Key: `marksheet/filled_marksheet_${Date.now()}.pdf`,
  //   Body: pdfBytes,
  //   ContentType: "application/pdf",
  // };

  // const command = new PutObjectCommand(params);
  // await s3.send(command);

  fs.writeFileSync("filled_Marksheet.pdf", pdfBytes);

  console.log("PDF generated successfully: filled_marksheet.pdf");
}

// uthate gele komabo
