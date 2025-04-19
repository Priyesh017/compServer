import { CookieOptions, Response } from "express";
import jwt from "jsonwebtoken";
import fs from "fs";
import { PDFDocument, rgb, StandardFonts, PDFFont } from "pdf-lib";
import QRCode from "qrcode";
import sharp from "sharp";
import axios from "axios";
import path from "path";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import crypto from "crypto";
import { s3 } from "./index.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import logger from "./logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface dtype {
  name: string;
  center: {
    Centername: string;
    code: number;
  };
  address: string;
  course: {
    CName: string;
  };
  EnrollmentNo: number;
  IdCardNo: number;
  imageLink: string;
  mobileNo: string;
}

type DataItem = {
  id: number;
  EnrollmentNo: number;
  verified: boolean;
  createdAt: string;
  ExamCenterCode: string;
  ATI_CODE: string;
  practExmdate: string;
  theoryExamdate: string;
  practExmtime: string;
  theoryExmtime: string;
  sem: string;
  enrollment: {
    name: string;
    mobileNo: string;
    email: string;
    EnrollmentNo: number;
    imageLink: string;
    address: string;
    center: {
      Centername: string;
      code: number;
    };
    father: string;
    IdCardNo: string;
    amount: {
      lastPaymentRecieptno: string;
    };
    course: {
      CName: string;
    };
  };
};
export type MarksheetData = {
  enrollment: {
    name: string;
    father: string;
    dob: string;
    imageLink: string;
    CertificateNo: number;
    center: {
      Centername: string;
      code: number;
      address: string;
    };
    course: {
      CName: string;
      Duration: number;
    };
  };
  marks: {
    subject: string;
    theoryMarks: string;
    practicalMarks: string;
    theoryFullMarks: string;
    practicalFullMarks: string;
  }[];
  year: string;
  percentage: number;
  grade: string;
  EnrollmentNo: number;
  remarks: string;
  totalMarks: number;
};

const RADIUS = 470;
async function makeCircularImage(imageLink: string) {
  try {
    const tempPath = path.join(__dirname, "..", "tempid.jpg");
    const outputPath = path.join(__dirname, "..", "circle.png");

    // Download image
    const response = await axios({
      url: imageLink,
      responseType: "arraybuffer", // Download as buffer
    });

    fs.writeFileSync(tempPath, Buffer.from(response.data));

    // Create a circular mask with a fixed size
    const circleMask = Buffer.from(`
      <svg width="${RADIUS * 2}" height="${RADIUS * 2}">
        <circle cx="${RADIUS}" cy="${RADIUS}" r="${RADIUS}" fill="white"/>
      </svg>
    `);

    // Apply the circular mask with a fixed radius
    await sharp(tempPath)
      .resize(RADIUS * 2, RADIUS * 2) // Resize to fixed size
      .composite([{ input: circleMask, blend: "dest-in" }]) // Apply mask
      .png() // Output as PNG to keep transparency
      .toFile(outputPath);
  } catch (error) {
    logger.error(error);
  }
}

export const formatDateForJS = (date: string) => {
  const formatted = date.replace(/(\d{2})(\d{2})(\d{4})/, "$3-$2-$1"); // Convert "DDMMYYYY" to "YYYY-MM-DD"
  return new Date(formatted);
};

function countDigits(num: number) {
  return Math.abs(num).toString().length;
}
export function generateSecurePassword(length = 12) {
  return crypto
    .randomBytes(length)
    .toString("base64") // Convert to a readable format
    .slice(0, length) // Trim to desired length
    .replace(/[^a-zA-Z0-9]/g, ""); // Remove special characters
}

export const accessTokenCookieOptions: CookieOptions = {
  maxAge: 1000 * 60 * 20 * 3 * 12,
  httpOnly: true,
  sameSite: "none",
  secure: true,
  signed: true,
};

export const Cookiehelper = (res: Response, user: any) => {
  const { password: m, ...userWithoutPassword } = user;
  const token = jwt.sign(userWithoutPassword, process.env.TOKEN_SECRET!, {
    expiresIn: "12h",
  });
  res
    .cookie("accessToken", token, accessTokenCookieOptions)
    .status(200)
    .json({ message: "Login successful", user: userWithoutPassword });
};

const adjustCenteredTextPosition = (
  text: string,
  pdfWidth: number,
  pdfHeight: number,
  yOffset: number, // Distance from the top
  font: PDFFont, // Font object to measure text width accurately
  baseFontSize: number = 80
) => {
  let fontSize = baseFontSize;
  const textWidth = font.widthOfTextAtSize(text, fontSize); // Get accurate text width

  // Calculate X position to center the text
  const x = (pdfWidth - textWidth) / 2;

  // Adjust Y position based on the given offset (distance from the top)
  const y = pdfHeight - yOffset;

  return { x, y, size: fontSize };
};

function getRandomDate(year: number) {
  const start = new Date(year, 0, 1); // January 1st of the given year
  const end = new Date(year, 11, 31); // December 31st of the given year
  const randomTime =
    start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(randomTime).toLocaleDateString();
}

export async function fill_franchise() {
  const studentData = {
    Name: "mainak",
    EnrollmentNo: "mainak",
    CourseName: "CName",
    Centername: "s",
    totalMarks: "m",
  };

  const qrText = JSON.stringify(studentData);
  const qrCodeBuffer = await QRCode.toBuffer(qrText);

  const existingPdfBytes = fs.readFileSync("files/franchise.pdf");
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  const qrImage = await pdfDoc.embedPng(qrCodeBuffer);
  const { width, height } = qrImage.scale(0.3);

  const page = pdfDoc.getPages()[0];
  if (typeof page == "undefined") return;

  const pdfHeight = page.getHeight();

  page.drawImage(qrImage, {
    x: 50,
    y: pdfHeight - 220,
    width,
    height,
  });

  page.drawText("father", {
    x: 248,
    y: pdfHeight - 291,
    size: 18,
    color: rgb(0, 0, 0),
  });
  page.drawText("CName", {
    x: 232,
    y: pdfHeight - 341,
    size: 15,
    color: rgb(0, 0, 0),
  });

  page.drawText("completed", {
    x: 151,
    y: pdfHeight - 351,
    size: 18,
    color: rgb(0, 0, 0),
  });
  page.drawText("5years", {
    x: 150,
    y: pdfHeight - 378,
    size: 15,
    color: rgb(0, 0, 0),
  });

  page.drawText("2002", {
    x: 456,
    y: pdfHeight - 380,
    size: 18,
    color: rgb(0, 0, 0),
  });
  page.drawText("CName", {
    x: 157,
    y: pdfHeight - 406,
    size: 15,
    color: rgb(0, 0, 0),
  });

  page.drawText("father", {
    x: 485,
    y: pdfHeight - 406,
    size: 18,
    color: rgb(0, 0, 0),
  });
  page.drawText("CName", {
    x: 179,
    y: pdfHeight - 436,
    size: 15,
    color: rgb(0, 0, 0),
  });
  page.drawText("father", {
    x: 223,
    y: pdfHeight - 458,
    size: 18,
    color: rgb(0, 0, 0),
  });

  page.drawText("CName", {
    x: 232,
    y: pdfHeight - 350,
    size: 15,
    color: rgb(0, 0, 0),
  });
  const pdfBytes = await pdfDoc.save();

  fs.writeFileSync("filled_franchise.pdf", pdfBytes);
}
export async function fillCertificate({
  grade,
  totalMarks,
  year,
  enrollment: {
    name,
    CertificateNo,
    imageLink,
    father,
    course: { CName, Duration },
    center: { Centername, code },
  },
  EnrollmentNo,
}: MarksheetData) {
  try {
    const studentData = {
      Name: name,
      EnrollmentNo,
      CourseName: CName,
      Centername,
      totalMarks,
    };

    const qrText = JSON.stringify(studentData);
    const qrCodeBuffer = await QRCode.toBuffer(qrText);

    const existingPdfBytes = fs.readFileSync("files/certificate.pdf");
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    const response = await axios({
      url: imageLink,
      responseType: "arraybuffer", // Download as buffer
    });
    const Image = await pdfDoc.embedJpg(Buffer.from(response.data));

    // Get the first page
    const page = pdfDoc.getPages()[0];
    if (typeof page == "undefined") return;

    const pdfHeight = page.getHeight();

    // Embed QR Code image
    const qrImage = await pdfDoc.embedPng(qrCodeBuffer);
    const { width, height } = qrImage.scale(0.3); // Adjust QR size

    // Position QR Code (adjust x, y as needed)

    page.drawImage(qrImage, {
      x: 50, // Adjust X position
      y: pdfHeight - 220, // Adjust Y position (PDF starts from bottom-left)
      width,
      height,
    });

    // Draw the image at a specific position (x, y)
    page.drawImage(Image, {
      x: 475, // Adjust X position
      y: pdfHeight - 220, // Adjust Y position (PDF coordinates start from bottom-left)
      width,
      height,
    });
    // Set font size and position

    const fontSize = 18;

    const remc = 4 - countDigits(CertificateNo);
    const paddedNumberc = CertificateNo.toString().padStart(remc, "0");

    page.drawText(`${year}${paddedNumberc}`, {
      x: 371,
      y: pdfHeight - 32,
      size: 12,
      color: rgb(0, 0, 0),
    });
    page.drawText(name, {
      x: 231,
      y: pdfHeight - 265,
      size: fontSize,
      color: rgb(0, 0, 0),
    });

    page.drawText(father, {
      x: 248,
      y: pdfHeight - 291,
      size: fontSize,
      color: rgb(0, 0, 0),
    });
    page.drawText(CName, {
      x: 153,
      y: pdfHeight - 341,
      size: 15,
      color: rgb(0, 0, 0),
    });

    page.drawText(`${Duration.toString()} MONTH`, {
      x: 145,
      y: pdfHeight - 367,
      size: fontSize,
      color: rgb(0, 0, 0),
    });

    page.drawText(year, {
      x: 486,
      y: pdfHeight - 367,
      size: 15,
      color: rgb(0, 0, 0),
    });
    page.drawText(grade, {
      x: 270,
      y: pdfHeight - 392,
      size: fontSize,
      color: rgb(0, 0, 0),
    });

    const rem = 6 - countDigits(EnrollmentNo);
    const remcode = 6 - countDigits(code);

    const paddedNumber = EnrollmentNo.toString().padStart(rem, "0");
    const paddedCode = code.toString().padStart(remcode, "0");

    page.drawText(`YCTC${paddedCode}/${paddedNumber}`, {
      x: 479,
      y: pdfHeight - 392,
      size: 13,
      color: rgb(0, 0, 0),
    });
    page.drawText(Centername, {
      x: 200,
      y: pdfHeight - 417,
      size: 12,
      color: rgb(0, 0, 0),
    });

    const issueDate =
      year == new Date(Date.now()).getFullYear().toString()
        ? new Date(Date.now()).toLocaleDateString()
        : getRandomDate(parseInt(year));

    page.drawText(issueDate, {
      x: 300,
      y: pdfHeight - 445,
      size: fontSize,
      color: rgb(0, 0, 0),
    });

    // Serialize the document and write it to a file
    const pdfBytes = await pdfDoc.save();
    const n = name.split(" ")[0];

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `certificates/${n}-${totalMarks}.pdf`,
      Body: pdfBytes,
      ContentType: "application/pdf",
    };

    const command = new PutObjectCommand(params);
    await s3.send(command);
    const pdfUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/certificates/${n}-${totalMarks}.pdf`;

    return pdfUrl;

    // fs.writeFileSync("filled_certificate.pdf", pdfBytes);
  } catch (error) {
    logger.error(error);
  }
}

export async function filladmit({
  EnrollmentNo,
  enrollment: {
    name,
    father,
    course: { CName },
    imageLink,
    center: { code },
  },
  ATI_CODE,
  ExamCenterCode,
  theoryExamdate,
  practExmdate,
  practExmtime,
  theoryExmtime,
  sem,
}: DataItem) {
  try {
    const existingPdfBytes = fs.readFileSync("files/admit.pdf");
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    const response = await axios({
      url: imageLink,
      responseType: "arraybuffer", // Download as buffer
    });

    const imageBytes2 = fs.readFileSync("files/sign.png");

    const page = pdfDoc.getPages()[0];
    if (typeof page == "undefined") return;

    const pdfHeight = page.getHeight();

    const image = await pdfDoc.embedJpg(Buffer.from(response.data));
    const image2 = await pdfDoc.embedPng(imageBytes2);

    const rem = 6 - countDigits(EnrollmentNo);
    const remcode = 6 - countDigits(code);

    const paddedNumber = EnrollmentNo.toString().padStart(rem, "0");
    const paddedCode = code.toString().padStart(remcode, "0");

    page.drawText(`YCTC${paddedCode}/${paddedNumber}`, {
      x: 165,
      y: pdfHeight - 156,
      size: 13,
      color: rgb(0, 0, 0),
    });

    page.drawText(name, {
      x: 165,
      y: pdfHeight - 173,
      size: 13,
      color: rgb(0, 0, 0),
    });

    page.drawText(father, {
      x: 165,
      y: pdfHeight - 190,
      size: 13,
      color: rgb(0, 0, 0),
    });

    page.drawText(CName, {
      x: 165,
      y: pdfHeight - 207,
      size: 10,
      color: rgb(0, 0, 0),
    });

    page.drawText(ATI_CODE, {
      x: 165,
      y: pdfHeight - 224,
      size: 13,
      color: rgb(0, 0, 0),
    });

    page.drawText(ExamCenterCode, {
      x: 165,
      y: pdfHeight - 241,
      size: 13,
      color: rgb(0, 0, 0),
    });

    page.drawText(theoryExamdate, {
      x: 83,
      y: pdfHeight - 272,
      size: 8,
      color: rgb(0, 0, 0),
    });

    page.drawText(theoryExmtime, {
      x: 145,
      y: pdfHeight - 272,
      size: 8,
      color: rgb(0, 0, 0),
    });

    page.drawText(sem, {
      x: 208,
      y: pdfHeight - 272,
      size: 8,
      color: rgb(0, 0, 0),
    });

    page.drawText(practExmdate, {
      x: 83,
      y: pdfHeight - 289,
      size: 8,
      color: rgb(0, 0, 0),
    });

    page.drawText(practExmtime, {
      x: 145,
      y: pdfHeight - 289,
      size: 8,
      color: rgb(0, 0, 0),
    });

    page.drawText(sem, {
      x: 208,
      y: pdfHeight - 289,
      size: 8,
      color: rgb(0, 0, 0),
    });

    page.drawImage(image, {
      x: 391, // Adjust X position
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
    const n = name.split(" ")[0];

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `admit/${n}-${sem}.pdf`,
      Body: pdfBytes,
      ContentType: "application/pdf",
    };

    const command = new PutObjectCommand(params);
    await s3.send(command);
    const pdfUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/admit/${n}-${sem}.pdf`;
    return pdfUrl;

    // fs.writeFileSync("filled_admit.pdf", pdfBytes);
  } catch (error) {
    logger.error(error);
  }
}

export async function fillId({
  EnrollmentNo,
  IdCardNo,
  address,
  imageLink,
  mobileNo,
  center: { Centername, code },
  course: { CName },
  name,
}: dtype) {
  try {
    const existingPdfBytes = fs.readFileSync("files/id.pdf");
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const page = pdfDoc.getPages()[0];
    if (typeof page == "undefined") return;

    const pdfHeight = page.getHeight();
    const pdfWidth = page.getWidth();

    await makeCircularImage(imageLink);

    const imageBytes = fs.readFileSync("circle.png");

    const sNamePosition = adjustCenteredTextPosition(
      name,
      pdfWidth,
      pdfHeight,
      940,
      font,
      80
    );
    const cNamePosition = adjustCenteredTextPosition(
      CName,
      pdfWidth,
      pdfHeight,
      1000,
      font,
      40
    );

    page.drawText(name, {
      x: sNamePosition.x,
      y: sNamePosition.y,
      size: sNamePosition.size,
      color: rgb(0, 0, 0),
    });

    page.drawText(CName, {
      x: cNamePosition.x,
      y: cNamePosition.y,
      size: cNamePosition.size,
      color: rgb(0, 1, 0),
    });

    page.drawText(`ID NO: ${IdCardNo}`, {
      x: 70,
      y: pdfHeight - 1100,
      size: 50,
      color: rgb(0, 0, 0),
    });
    const rem = 6 - countDigits(EnrollmentNo);
    const remcode = 6 - countDigits(code);

    const paddedNumber = EnrollmentNo.toString().padStart(rem, "0");
    const paddedCode = code.toString().padStart(remcode, "0");

    page.drawText(`ENROLLMENT: YCTC${paddedCode}/${paddedNumber}`, {
      x: 70,
      y: pdfHeight - 1180,
      size: 50,
      color: rgb(0, 0, 0),
    });

    page.drawText(`ADDRESS: ${address}`, {
      x: 70,
      y: pdfHeight - 1260,
      size: 50,
      color: rgb(0, 0, 0),
    });

    interface WrapTextParams {
      text: string;
      maxWidth: number;
      font: PDFDocument["fonts"][0];
      fontSize: number;
    }

    const wrapText = ({
      text,
      maxWidth,
      font,
      fontSize,
    }: WrapTextParams): string[] => {
      if (!text.trim()) return []; // Handle empty or whitespace-only text

      const words = text.split(/\s+/); // Split on multiple spaces to avoid empty entries
      let lines: string[] = [];
      let currentLine = words[0] || ""; // Ensure it's a string

      for (let i = 1; i < words.length; i++) {
        const word = words[i] ?? "";

        const width = font.widthOfTextAtSize(
          `${currentLine} ${word}`,
          fontSize
        );

        if (width < maxWidth) {
          currentLine += ` ${word}`;
        } else {
          lines.push(currentLine);
          currentLine = word;
        }
      }

      if (currentLine) lines.push(currentLine); // Push last line if not empty
      return lines;
    };

    // Define text wrapping parameters
    const maxWidth = pdfWidth - 60; // Adjust as needed
    const fontSize = 50;
    const wrappedLines = wrapText({
      text: `CENTER: ${Centername}`,
      maxWidth,
      font,
      fontSize,
    });

    // Draw wrapped text
    let yPosition = pdfHeight - 1340;

    wrappedLines.forEach((line) => {
      page.drawText(line, {
        x: 70,
        y: yPosition,
        size: fontSize,
        color: rgb(0, 0, 0),
      });
      yPosition -= fontSize + 5; // Adjust line spacing
    });

    const Image = await pdfDoc.embedPng(imageBytes);
    const { width, height } = Image.scale(0.47); // Scale image

    page.drawImage(Image, {
      x: 340, // Adjust X position
      y: pdfHeight - 830, // Adjust Y position (PDF coordinates start from bottom-left)
      width,
      height,
    });

    page.drawText(address, {
      x: 23,
      y: pdfHeight - 1540,
      size: 45,
      color: rgb(1, 1, 1),
    });

    page.drawText(`ph: ${mobileNo}`, {
      x: 690,
      y: pdfHeight - 1656,
      size: 45,
      color: rgb(1, 1, 1),
    });

    const pdfBytes = await pdfDoc.save();
    const n = name.split(" ")[0];
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `idcard/${n}-${IdCardNo}.pdf`,
      Body: pdfBytes,
      ContentType: "application/pdf",
    };
    const command = new PutObjectCommand(params);
    await s3.send(command);
    const pdfUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/idcard/${n}-${IdCardNo}.pdf`;
    return pdfUrl;
    // fs.writeFileSync("filled_id.pdf", pdfBytes);
  } catch (error) {
    logger.error(error);
  }
}

export async function fillMarksheet(data: MarksheetData) {
  try {
    const existingPdfBytes = fs.readFileSync("files/marksheet.pdf");
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const page = pdfDoc.getPages()[0];
    if (typeof page == "undefined") return;

    const pdfHeight = page.getHeight();
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold); // Embed bold font

    const response = await axios({
      url: data.enrollment.imageLink,
      responseType: "arraybuffer", // Download as buffer
    });

    const Image = await pdfDoc.embedJpg(Buffer.from(response.data));

    const studentData = {
      Name: data.enrollment.name,
      EnrollmentNo: data.EnrollmentNo,
      CourseName: data.enrollment.course.CName,
      Centername: data.enrollment.center.Centername,
      totalMarks: data.totalMarks,
    };

    const qrText = JSON.stringify(studentData);

    const qrCodeBuffer = await QRCode.toBuffer(qrText);

    const qrImage = await pdfDoc.embedPng(qrCodeBuffer);
    const { width, height } = qrImage.scale(0.27);

    page.drawImage(qrImage, {
      x: 35, // Adjust X position
      y: pdfHeight - 180, // Adjust Y position (PDF starts from bottom-left)
      width,
      height,
    });
    page.drawImage(Image, {
      x: 525, // Adjust X position
      y: pdfHeight - 180, // Adjust Y position (PDF coordinates start from bottom-left)
      width,
      height,
    });

    const rem = 6 - countDigits(data.EnrollmentNo);
    const remcode = 6 - countDigits(data.enrollment.center.code);

    const paddedNumber = data.EnrollmentNo.toString().padStart(rem, "0");
    const paddedCode = data.enrollment.center.code
      .toString()
      .padStart(remcode, "0");

    // Student Information
    page.drawText(data.enrollment.name.toUpperCase(), {
      x: 158,
      y: pdfHeight - 218,
      size: 12,
      color: rgb(0, 0, 0),
    });
    page.drawText(`YCTC${paddedCode}/${paddedNumber}`, {
      x: 487,
      y: pdfHeight - 218,
      size: 12,
      color: rgb(0, 0, 0),
    });
    page.drawText(data.enrollment.father.toUpperCase(), {
      x: 102,
      y: pdfHeight - 243,
      size: 12,
      color: rgb(0, 0, 0),
    });
    page.drawText(data.year, {
      x: 415,
      y: pdfHeight - 243,
      size: 12,
      color: rgb(0, 0, 0),
    });
    page.drawText(data.enrollment.course.CName, {
      x: 136,
      y: pdfHeight - 269,
      size: 10,
      color: rgb(0, 0, 0),
    });
    page.drawText(
      `${data.enrollment.course.Duration.toString().toUpperCase()} MONTH`,
      {
        x: 500,
        y: pdfHeight - 269,
        size: 12,
        color: rgb(0, 0, 0),
      }
    );
    page.drawText(data.enrollment.center.Centername, {
      x: 130,
      y: pdfHeight - 294,
      size: 10,
      color: rgb(0, 0, 0),
    });

    page.drawText(data.enrollment.center.code.toString(), {
      x: 480,
      y: pdfHeight - 295,
      size: 12,
      color: rgb(0, 0, 0),
    });
    page.drawText(data.enrollment.center.address.toUpperCase(), {
      x: 146,
      y: pdfHeight - 320,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(new Date(data.enrollment.dob).toLocaleDateString(), {
      x: 470,
      y: pdfHeight - 320,
      size: 12,
      color: rgb(0, 0, 0),
    });

    // Initialize total marks
    let totalTheoryMarks = 0;
    let totalPracticalMarks = 0;
    let totalTheoryFullMarks = 0;
    let totalPracticalFullMarks = 0;

    let sl = 1;

    // Subjects and Marks
    let yPosition = pdfHeight - 410;
    data.marks.forEach((subject) => {
      const tm = parseInt(subject.theoryMarks);
      const pm = parseInt(subject.practicalMarks);
      const tfm = parseInt(subject.theoryFullMarks);
      const pfm = parseInt(subject.practicalFullMarks);
      const total = tm + pm;

      totalTheoryMarks += tm;
      totalPracticalMarks += pm;
      totalTheoryFullMarks += tfm;
      totalPracticalFullMarks += pfm;

      page.drawText(sl.toString(), {
        x: 28,
        y: yPosition,
        size: 13,
        font: boldFont,
        color: rgb(0, 0, 0),
      });

      sl++;

      page.drawText(subject.subject, {
        x: 60,
        y: yPosition,
        size: 13,
        font: boldFont,
        color: rgb(0, 0, 0),
      });
      page.drawText(subject.theoryFullMarks.toString(), {
        x: 290,
        y: yPosition,
        size: 13,
        font: boldFont,
        color: rgb(0, 0, 0),
      });
      page.drawText(subject.practicalFullMarks.toString(), {
        x: 355,
        y: yPosition,
        size: 13,
        font: boldFont,
        color: rgb(0, 0, 0),
      });
      page.drawText(subject.theoryMarks.toString(), {
        x: 430,
        y: yPosition,
        size: 13,
        font: boldFont,
        color: rgb(0, 0, 0),
      });
      page.drawText(subject.practicalMarks.toString(), {
        x: 495,
        y: yPosition,
        size: 13,
        font: boldFont,
        color: rgb(0, 0, 0),
      });
      page.drawText(total.toString(), {
        x: 555,
        y: yPosition,
        size: 13,
        font: boldFont,
        color: rgb(0, 0, 0),
      });

      yPosition -= 25; // Move to the next row
    });

    page.drawText(totalTheoryFullMarks.toString(), {
      x: 290,
      y: pdfHeight - 645,
      size: 13,
      font: boldFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(totalPracticalFullMarks.toString(), {
      x: 355,
      y: pdfHeight - 645,
      size: 13,
      font: boldFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(totalTheoryMarks.toString(), {
      x: 426,
      y: pdfHeight - 645,
      size: 13,
      font: boldFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(totalPracticalMarks.toString(), {
      x: 490,
      y: pdfHeight - 645,
      size: 13,
      font: boldFont,
      color: rgb(0, 0, 0),
    });

    // Grand Total, Percentage, Grade, and Result
    page.drawText(data.totalMarks.toString(), {
      x: 555,
      y: pdfHeight - 645,
      size: 13,
      font: boldFont,
      color: rgb(0, 0, 0),
    });
    page.drawText(data.percentage.toFixed(2) + "%", {
      x: 285,
      y: pdfHeight - 672,
      size: 13,
      font: boldFont,
      color: rgb(0, 0, 0),
    });
    page.drawText(data.grade, {
      x: 560,
      y: pdfHeight - 672,
      size: 13,
      font: boldFont,
      color: rgb(0, 0, 0),
    });
    page.drawText(data.remarks, {
      x: 50,
      y: pdfHeight - 672,
      size: 13,
      font: boldFont,
      color: rgb(0, 0, 0),
    });

    const issueDate =
      data.year == new Date(Date.now()).getFullYear().toString()
        ? new Date(Date.now()).toLocaleDateString()
        : getRandomDate(parseInt(data.year));

    page.drawText(issueDate, {
      x: 150,
      y: pdfHeight - 700,
      size: 13,
      font: boldFont,
      color: rgb(0, 0, 0),
    });

    // Save the PDF
    const pdfBytes = await pdfDoc.save();
    const n = data.enrollment.name.split(" ")[0];

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `marksheet/${n}-${data.totalMarks}.pdf`,
      Body: pdfBytes,
      ContentType: "application/pdf",
    };

    const command = new PutObjectCommand(params);
    await s3.send(command);
    const pdfUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/marksheet/${n}-${data.totalMarks}.pdf`;
    return pdfUrl;
    // fs.writeFileSync("filled_Marksheet.pdf", pdfBytes);
  } catch (error) {
    logger.error(error);
  }
}
