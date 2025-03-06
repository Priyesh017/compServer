import Bcrypt from "bcryptjs";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../client";
import {
  accessTokenCookieOptions,
  Cookiehelper,
  filladmit,
  fillCertificate,
  fillId,
  fillMarksheet,
  formatDateForJS,
  MarksheetData,
} from "../helper";

export async function loginFunc(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    // Find the user
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      res.status(200).json({ error: "User not found" });
      return;
    }

    if (!user.password) {
      res.status(200).json({ error: "plz login with your google account" });
      return;
    }
    // Compare passwords
    const isPasswordValid = await Bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(200).json({ error: "Invalid credentials" });
      return;
    }

    Cookiehelper(res, user);
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
}

export async function signupFunc(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;

    // check if user is already exists
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (user) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    // Hash the password
    const hashedPassword = await Bcrypt.hash(password, 10);

    // Save the user to the database
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ message: "User registration failed" });
  }
}

export async function loginCheckFunc(req: Request, res: Response) {
  try {
    const { accessToken } = req.signedCookies;

    if (!accessToken) {
      res.json({ loggedIn: false });
      return;
    }
    const user = jwt.verify(
      accessToken,
      process.env.TOKEN_SECRET!
    ) as jwt.JwtPayload & { eno?: string };

    if (user.eno) {
      const data = await prisma.enrollment.findFirst({
        where: {
          Enrollmentno: user.eno,
        },
      });

      res.json({ loggedIn: true, user: data });
      return;
    }

    res.json({ loggedIn: true, user });
  } catch (err) {
    res.json({ loggedIn: false }).status(401);
  }
}

export async function logoutfunc(req: Request, res: Response) {
  res
    .clearCookie("accessToken", {
      ...accessTokenCookieOptions,
      maxAge: 0,
    })

    .json({ success: true });
}

export async function enrollCheck(req: Request, res: Response) {
  const no = req.query.id as string;

  const val = await prisma.enrollment.findFirst({
    where: {
      Enrollmentno: no,
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
  } = req.body;

  const dobUpdated = new Date(dob);
  const centerid = Number(req.centerId);

  const data = await prisma.enrollment.create({
    data: {
      father,
      mobileNo,
      mother,
      address,
      dob: dobUpdated,
      name,
      wpNo,
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
  const { locationX, locationY, Centername, adminId, address, code } = req.body;

  // Ensure locationX and locationY are converted to numbers
  const center = await prisma.center.create({
    data: {
      locationX: parseFloat(locationX), // Convert to float
      locationY: parseFloat(locationY), // Convert to float
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
      Enrollmentno: data.EnrollmentNo,
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

export async function studentLogin(req: Request, res: Response) {
  const { enrollmentNo, password } = req.body;

  const dob = formatDateForJS(password);

  const data = await prisma.enrollment.findFirst({
    where: {
      Enrollmentno: enrollmentNo,
      dob,
    },
  });

  if (!data) {
    res.json({ success: false });
    return;
  }

  const token = jwt.sign({ eno: enrollmentNo }, process.env.TOKEN_SECRET!, {
    expiresIn: "1h",
  });
  res
    .cookie("accessToken", token, accessTokenCookieOptions)
    .status(200)
    .json({ success: true, data });
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
  const { name, email, message } = req.body;

  const data = await prisma.enquiry.create({
    data: {
      email,
      message,
      name,
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
