import Bcrypt from "bcryptjs";
import { Request, Response } from "express";
import { prisma } from "../client.js";
import {
  filladmit,
  fillCertificate,
  fillId,
  fillMarksheet,
  generateSecurePassword,
  MarksheetData,
} from "../helper.js";
import {
  sendPasswordResetEmail,
  sendTemporaryPasswordEmail,
} from "../emailHelper.js";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import { redisClient, transporter } from "../index.js";

export async function enrollCheck(req: Request, res: Response) {
  const no = req.query.id as string;

  const val = await prisma.enrollment.findFirst({
    where: {
      Enrollmentno: parseInt(no),
    },
  });

  res.json(val);
}

export async function createEnrollment(req: Request, res: Response) {
  //take course id from client
  const {
    name,
    dob,
    fatherName: father,
    motherName: mother,
    Address: address,
    mobile: mobileNo,
    wapp: wpNo,
    enrollmentNo: Enrollmentno,
    eduqualification,
    idno: IdCardNo,
    courseid,
    imageUrl,
    category,
    nationality,
    idProof,
    idproofNo,
    sex,
  } = req.body;

  const dobUpdated = new Date(dob);
  const centerid = Number(req.centerId);

  const data = await prisma.enrollment.create({
    data: {
      father,
      category,
      nationality,
      mobileNo,
      idProof,
      idproofNo,
      mother,
      address,
      status: "pending",
      dob: dobUpdated,
      name,
      wpNo,
      sex,
      course: {
        connect: {
          id: parseInt(courseid),
        },
      },
      Enrollmentno,
      eduqualification,
      IdCardNo,
      center: {
        connect: { id: centerid },
      },
      imageLink: imageUrl,
    },
  });

  res.json({ success: "true", data });
}

export async function ActivateEnrollment(req: Request, res: Response) {
  const { id } = req.body;
  const val = await prisma.enrollment.update({
    where: {
      id,
    },
    data: {
      activated: true,
    },
  });

  res.json({ success: true, val });
}

export async function deActivateEnrollment(req: Request, res: Response) {
  const { id } = req.body;
  const val = await prisma.enrollment.update({
    where: {
      id,
    },
    data: {
      activated: false,
    },
  });

  res.json({ success: true, val });
}

export async function createCenter(req: Request, res: Response) {
  const { Centername, adminId, address, code } = req.body;

  // Validate input
  if (!Centername || !adminId || !address || !code) {
    res.status(400).json({ error: "All fields are required" });
    return;
  }

  const center = await prisma.center.create({
    data: {
      Centername,
      admin: {
        connect: { id: parseInt(adminId) }, // Ensure adminId is a number
      },
      address,
      code,
    },
  });

  res.json(center);
}

export async function AllEnrollments(req: Request, res: Response) {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const skip = (page - 1) * limit;

  const enrollments = await prisma.enrollment.findMany({
    skip,
    take: limit,
    where: req.Role === "CENTER" ? { centerid: Number(req.centerId) } : {},
    select: {
      admitLink: true,
      certificateLink: true,
      dob: true,
      imageLink: true,
      idCardLink: true,
      marksheetLink: true,
      name: true,
      createdAt: true,
      Enrollmentno: true,
      id: true,
      activated: true, // Ensure activated field is included
    },
  });

  const total = await prisma.enrollment.count(); // Get total count for pagination
  res.json({ enrollments, total });
}

export async function generateCertificate(req: Request, res: Response) {
  const link = await fillCertificate(req.body.data);
  if (link == undefined) return;

  await prisma.enrollment.update({
    where: {
      Enrollmentno: req.body.data.EnrollmentNo,
    },
    data: {
      certificateLink: link,
    },
  });
  res.json({ success: true });
}

export async function generateadmit(req: Request, res: Response) {
  const link = await filladmit(req.body.enrollment);

  await prisma.enrollment.update({
    where: {
      Enrollmentno: req.body.enrollment.EnrollmentNo,
    },
    data: {
      admitLink: link,
    },
  });
  res.json({ success: true });
}

export async function generateId(req: Request, res: Response) {
  const { Enrollmentno } = req.body;

  const data = await prisma.enrollment.findFirst({
    where: {
      Enrollmentno,
    },
    select: {
      address: true,
      mobileNo: true,
      imageLink: true,
      center: {
        select: {
          Centername: true,
        },
      },
      IdCardNo: true,
      Enrollmentno: true,
      name: true,
      course: {
        select: {
          CName: true,
        },
      },
    },
  });

  if (!data) {
    res.json({ success: false });
    return;
  }

  const link = await fillId(data);

  await prisma.enrollment.update({
    where: {
      Enrollmentno,
    },
    data: {
      idCardLink: link,
    },
  });
  res.json({ success: true });
}

export async function generateMarksheet(req: Request, res: Response) {
  const data = req.body.data as MarksheetData;

  if (!data) {
    res.json({ success: false });
    return;
  }

  const link = await fillMarksheet(data);

  await prisma.enrollment.update({
    where: {
      Enrollmentno: parseInt(data.EnrollmentNo),
    },
    data: {
      marksheetLink: link,
    },
  });

  res.json({ success: true });
}

export async function exmformfillupDatafetch(req: Request, res: Response) {
  // branch admin korbe
  const { enrollmentNo } = req.body;
  const centerid = req.centerId;

  const data = await prisma.enrollment.findFirst({
    where: {
      Enrollmentno: enrollmentNo,
      centerid,
    },
    include: {
      center: {
        select: {
          Centername: true,
        },
      },
      course: {
        select: {
          CName: true,
        },
      },
    },
  });

  res.json({ success: true, data });
}

export async function createCourse(req: Request, res: Response) {
  const { Duration, CName, price } = req.body;

  const data = await prisma.course.create({
    data: {
      Duration,
      CName,
      price,
    },
  });

  res.json({ success: true, data });
}

export async function exmformApprove(req: Request, res: Response) {
  const { id } = req.body;

  const data = await prisma.examForm.update({
    where: {
      id,
    },
    data: {
      verified: true,
    },
  });

  res.json({ success: true, data });
}

export async function exmformDisApprove(req: Request, res: Response) {
  const { id } = req.body;

  const data = await prisma.examForm.update({
    where: {
      id,
    },
    data: {
      verified: false,
    },
  });

  res.json({ success: true, data });
}

export async function exmmarksApprove(req: Request, res: Response) {
  const { id } = req.body;

  const data = await prisma.marks.update({
    where: {
      id,
    },
    data: {
      verified: true,
    },
  });

  res.json({ success: true, data });
}
export async function exmmarksDisApprove(req: Request, res: Response) {
  const { id } = req.body;

  const data = await prisma.marks.update({
    where: {
      id,
    },
    data: {
      verified: false,
    },
  });

  res.json({ success: true, data });
}
export async function exmmarksentry(req: Request, res: Response) {
  const { EnrollmentNo, marks, remarks, grade, percentage, totalMarks, year } =
    req.body;
  const p = parseFloat(percentage);
  const tm = parseFloat(totalMarks);
  console.log(JSON.stringify(req.body));

  const data = await prisma.marks.create({
    data: {
      EnrollmentNo,
      marks,
      remarks,
      grade,
      percentage: p,
      totalMarks: tm,
      year,
    },
  });

  res.json({ success: true, data });
}

export async function exmformsfetch(req: Request, res: Response) {
  const data = await prisma.examForm.findMany({
    where: {},
    include: {
      enrollment: {
        select: {
          name: true,
          mobileNo: true,
          wpNo: true,
          Enrollmentno: true,
          imageLink: true,
          address: true,
          father: true,
          center: {
            select: {
              Centername: true,
            },
          },
          IdCardNo: true,
          amount: {
            select: {
              lastPaymentRecieptno: true,
            },
          },
          course: {
            select: {
              CName: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  res.json({ success: true, data });
}

export async function marksheetfetch(req: Request, res: Response) {
  const data = await prisma.marks.findMany({
    where: {
      enrollment: {
        centerid: 1, // Filter by center ID inside enrollment
      },
    },
    include: {
      enrollment: {
        // First include enrollment
        select: {
          name: true,
          father: true,
          dob: true,
          imageLink: true,
          course: {
            select: {
              CName: true,
              Duration: true,
            },
          },
          center: {
            select: {
              Centername: true,
              code: true,
              address: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  res.json({ success: true, data });
}
export async function TakeEnquiry(req: Request, res: Response) {
  const {
    name,
    email,
    father,
    dob,
    sex,
    category,
    nationality,
    mobile,
    address,
    eduqualif,
    idProof,
    idproofNo,
    roomNo,
    squarefit,
    tradeLicense,
    bathroom,
    signatureLink,
    stateCoordinator,
    districtCoordinator,
    subdistrictCoordinator,
  } = req.body;

  const data = await prisma.enquiry.create({
    data: {
      email,
      father,
      dob,
      sex,
      category,
      nationality,
      mobile,
      address,
      name,
      eduqualif,
      idProof,
      idproofNo,
      roomNo,
      squarefit,
      tradeLicense,
      bathroom,
      signatureLink,
      stateCoordinator,
      districtCoordinator,
      subdistrictCoordinator,
    },
  });

  res.json({ success: true, data });
}
export async function FetchAllEnquiry(req: Request, res: Response) {
  const data = await prisma.enquiry.findMany({
    where: {},
  });

  res.json({ data });
}
export async function examFormFillup(req: Request, res: Response) {
  const {
    enrollmentNo,
    ATI_CODE,
    ExamCenterCode,
    lastpaymentR,
    ped,
    ted,
    pet,
    tet,
    SemNo,
  } = req.body;

  const data = await prisma.examForm.create({
    data: {
      EnrollmentNo: enrollmentNo,
      ATI_CODE,
      ExamCenterCode,
      practExmdate: ped,
      theoryExamdate: ted,
      practExmtime: pet,
      theoryExmtime: tet,
      sem: SemNo,
    },
  });

  await prisma.amount.update({
    where: {
      EnrollmentNo: enrollmentNo,
    },
    data: {
      lastPaymentRecieptno: lastpaymentR,
    },
  });

  res.json({ success: true, data });
}

export async function amountFetch(req: Request, res: Response) {
  const id = Number(req.centerId);

  const data = await prisma.enrollment.findMany({
    where: {
      centerid: id,
    },
    include: {
      amount: {
        select: {
          amountRemain: true,
          TotalPaid: true,
        },
      },
      course: {
        select: {
          price: true,
        },
      },
    },
  });

  res.json({ success: true, data });
}

export async function amountEdit(req: Request, res: Response) {
  const { EnrollmentNo, tp, ar } = req.body;
  const TotalPaid = parseInt(tp);
  const amountRemain = parseInt(ar);

  const data = await prisma.amount.upsert({
    where: {
      EnrollmentNo,
    },
    create: {
      TotalPaid,
      amountRemain,
      enrollment: {
        connect: {
          Enrollmentno: EnrollmentNo,
        },
      },
    },
    update: {
      TotalPaid: {
        increment: TotalPaid,
      },
      amountRemain,
    },
  });

  res.json({ success: true, data });
}

export async function VerifyEnquiry(req: Request, res: Response) {
  //ekta center create hobe and admin assign hobe

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const { name, email } = req.body;

  function sendUpdate(step: number, message: string) {
    res.write(`data: ${JSON.stringify({ step, message })}\n\n`);
  }

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (user) {
    res.status(400).json({ message: "User already exists" });
    return;
  }

  const Random_Password = generateSecurePassword();
  const hashedPassword = await Bcrypt.hash(Random_Password, 10);

  //send password to mail
  sendUpdate(1, "sending mail");

  await sendTemporaryPasswordEmail(email, Random_Password);

  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  const data = await prisma.center.create({
    data: {
      adminid: newUser.id,
      address: "",
      Centername: "",
    },
  });
  sendUpdate(2, "center created");

  res.end();
}

export async function ChangePassword(req: Request, res: Response) {
  const { id, password } = req.body;

  const data = await prisma.user.update({
    where: {
      id,
    },
    data: {
      password,
    },
  });

  res.json({ success: "true" });
}

export async function SendResetLink(req: Request, res: Response) {
  const { email } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(404).json({ message: "User not found" });

  // Generate a secure reset token
  const resetToken = crypto.randomBytes(32).toString("hex");
  const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour expiry

  await prisma.user.update({
    where: { email },
    data: { resetToken, resetTokenExpiry },
  });

  const resetLink = `http://localhost:3000/reset-password/${resetToken}`;

  await sendPasswordResetEmail(email, resetLink);

  res.json({ message: "Reset password link sent to your email" });
}

export async function ResetPassword(req: Request, res: Response) {
  const { token } = req.params;
  const { newPassword } = req.body;

  const user = await prisma.user.findFirst({
    where: { resetToken: token, resetTokenExpiry: { gt: new Date() } },
  });

  if (!user)
    return res.status(400).json({ message: "Invalid or expired token" });

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: { id: user.id },
    data: {
      password: hashedPassword,
      resetToken: null,
      resetTokenExpiry: null,
    },
  });

  res.json({ message: "Password reset successful" });
}

const generateOTP = () => crypto.randomInt(100000, 999999).toString();

export async function otpSend(req: Request, res: Response) {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  const otp = generateOTP();
  const hashedOtp = await bcrypt.hash(otp, 10);

  await redisClient.setex(`otp:${email}`, 300, hashedOtp); // Store OTP for 5 mins

  try {
    await transporter.sendMail({
      from: `mnyctcofficial@gmail.com`,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is: ${otp}. It expires in 5 minutes.`,
    });
    res.json({ message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send OTP" });
  }
}
export async function verify_otp(req: Request, res: Response) {
  const { email, otp } = req.body;
  const storedOtp = await redisClient.get(`otp:${email}`);

  if (!storedOtp)
    return res.status(400).json({ error: "OTP expired or not found" });

  const isMatch = await bcrypt.compare(otp, storedOtp);
  if (!isMatch) return res.status(400).json({ error: "Invalid OTP" });

  await redisClient.del(`otp:${email}`);

  res.json({ message: "OTP verified" });
}
// notice,notes and video upload , otp system,course entry,bank qr egulo possible hocche na
