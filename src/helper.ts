import { CookieOptions, Response } from "express";
import jwt from "jsonwebtoken";
import fs from "fs";
import { PDFDocument, rgb, StandardFonts, PDFFont } from "pdf-lib";
import QRCode from "qrcode";
import sharp from "sharp";

interface ftype {
  enrollNo: string;
  stuName: string;
  fName: string;
  courseCode: string;
  atiCode: string;
  ecCode: string;
}

interface dtype {
  name: string;
  center: {
    Centername: string;
  };
  address: string;
  course: {
    CName: string;
  };
  Enrollmentno: string;
  IdCardNo: string;
}

interface iData {
  id: number;
  marks: {
    subject: string;
    theoryMarks: string;
    practicalMarks: string;
    theoryFullMarks: string;
    practicalFullMarks: string;
  }[];
  remarks: string;
  EnrollmentNo: string;
  grade: string;
  totalMarks: number;
  percentage: number;
  verified: boolean;
  createdAt: string;
  year: string;
  enrollment: {
    name: string;
    father: string;
    dob: string;
    course: {
      CName: string;
      Duration: number;
    };
    center: {
      Centername: string;
      address: string;
    };
  };
}

export type MarksheetData = {
  enrollment: {
    name: string;
    father: string;
    mother: string;
    dob: Date;
    center: {
      Centername: string;
      code: string;
      address: string;
    };
    course: {
      CName: string;
      Duration: number;
    };
  };
  year: string;

  marks: {
    subject: string;
    theoryMarks: string;
    practicalMarks: string;
    theoryFullMarks: string;
    practicalFullMarks: string;
  }[];

  percentage: number;
  grade: string;
  EnrollmentNo: string;
  remarks: string;
  totalMarks: number;
};

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
}

export const formatDateForJS = (date: string) => {
  const formatted = date.replace(/(\d{2})(\d{2})(\d{4})/, "$3-$2-$1"); // Convert "DDMMYYYY" to "YYYY-MM-DD"
  return new Date(formatted);
};

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
export async function fillCertificate({
  grade,
  totalMarks,
  year,
  enrollment: {
    name,
    father,
    course: { CName, Duration },
    center: { Centername },
  },
  EnrollmentNo,
}: iData) {
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
  const imageBytes = fs.readFileSync("files/temp.jpg");

  // Get the first page
  const page = pdfDoc.getPages()[0];
  const pdfHeight = page.getHeight();

  // Embed QR Code image
  const qrImage = await pdfDoc.embedPng(qrCodeBuffer);
  const { width, height } = qrImage.scale(0.3); // Adjust QR size
  const image = await pdfDoc.embedJpg(imageBytes);
  // Position QR Code (adjust x, y as needed)

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
    size: fontSize,
    color: rgb(0, 0, 0),
  });

  page.drawText(`${Duration.toString()} months`, {
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
  page.drawText(EnrollmentNo, {
    x: 483,
    y: pdfHeight - 392,
    size: 15,
    color: rgb(0, 0, 0),
  });
  page.drawText(Centername, {
    x: 218,
    y: pdfHeight - 417,
    size: 16,
    color: rgb(0, 0, 0),
  });

  page.drawText(new Date(Date.now()).toLocaleDateString(), {
    x: 249,
    y: pdfHeight - 445,
    size: fontSize,
    color: rgb(0, 0, 0),
  });

  // Serialize the document and write it to a file
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync("filled_certificate.pdf", pdfBytes);
}

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
}

export async function fillId({
  Enrollmentno,
  IdCardNo,
  address,
  center: { Centername },
  course: { CName },
  name,
}: dtype) {
  const existingPdfBytes = fs.readFileSync("files/id.pdf");
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const page = pdfDoc.getPages()[0];
  const pdfHeight = page.getHeight();
  const pdfWidth = page.getWidth();

  // await makeCircularImage();
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
    x: 80,
    y: pdfHeight - 1100,
    size: 50,
    color: rgb(0, 0, 0),
  });

  page.drawText(`ENROLLMENT: ${Enrollmentno}`, {
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
    const words = text.split(" ");
    let lines: string[] = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      let word = words[i];
      let width = font.widthOfTextAtSize(`${currentLine} ${word}`, fontSize);

      if (width < maxWidth) {
        currentLine += ` ${word}`;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
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
}

export async function fillMarksheet(data: MarksheetData) {
  const existingPdfBytes = fs.readFileSync("files/marksheet.pdf");
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const page = pdfDoc.getPages()[0];
  const pdfHeight = page.getHeight();
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold); // Embed bold font

  // Student Information
  page.drawText(data.enrollment.name.toUpperCase(), {
    x: 158,
    y: pdfHeight - 218,
    size: 12,
    color: rgb(0, 0, 0),
  });
  page.drawText(data.EnrollmentNo.toUpperCase(), {
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
  page.drawText(data.enrollment.course.CName.toUpperCase(), {
    x: 136,
    y: pdfHeight - 269,
    size: 12,
    color: rgb(0, 0, 0),
  });
  page.drawText(data.enrollment.course.Duration.toString().toUpperCase(), {
    x: 500,
    y: pdfHeight - 269,
    size: 12,
    color: rgb(0, 0, 0),
  });
  page.drawText(data.enrollment.center.Centername.toUpperCase(), {
    x: 130,
    y: pdfHeight - 294,
    size: 10,
    color: rgb(0, 0, 0),
  });
  page.drawText(data.enrollment.center.code.toUpperCase(), {
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
  page.drawText(data.enrollment.dob.toLocaleDateString(), {
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

  // Save the PDF
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync("filled_Marksheet.pdf", pdfBytes);
}

// uthate gele komabo
