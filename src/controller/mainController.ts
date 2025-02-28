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
    console.log(error);
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
  } = req.body;

  const dobUpdated = new Date(dob);

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
          id: 1,
        },
      },
      Enrollmentno,
      eduqualification,
      IdCardNo,

      center: {
        connect: {
          id: 1,
        },
      },
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

  res.json({ ok: true, val });
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

  res.json({ ok: true, val });
}

export async function createCenter(req: Request, res: Response) {
  const { locationX, locationY, Centername, adminId, address } = req.body;

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
    },
  });

  res.json(center);
}

export async function AllEnrollments(req: Request, res: Response) {
  // by admin
  const page = parseInt(req.query.page as string) || 1; // Default to page 1
  const limit = parseInt(req.query.limit as string) || 10; // Default limit 10

  const skip = (page - 1) * limit; // Calculate offset

  try {
    const enrollments = await prisma.enrollment.findMany({
      skip,
      take: limit,
    });

    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch enrollments" });
  }
}

export async function generateCertificate(req: Request, res: Response) {
  await fillCertificate(req.body);
  res.json({ ok: true });
}

export async function generateadmit(req: Request, res: Response) {
  await filladmit();
  res.json({ ok: true });
}

export async function generateId(req: Request, res: Response) {
  await fillId(req.body);

  res.json({ ok: true });
}

export async function generateMarksheet(req: Request, res: Response) {
  fillMarksheet().catch((err) => console.error(err));
  res.json({ data: "kuch hua haiiii" });
}

export async function exmformfillupDatafetch(req: Request, res: Response) {
  const { enrollmentNo } = req.body;

  const data = await prisma.enrollment.findFirst({
    where: {
      Enrollmentno: enrollmentNo,
    },
    include: {
      amount: {
        select: {
          lastPaymentRecieptno: true,
        },
      },
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

  res.json({ ok: true, data });
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

  res.json({ ok: true, data });
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

  res.json({ ok: true, data });
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

  res.json({ ok: true, data });
}
export async function exmmarksentry(req: Request, res: Response) {
  const { EnrollmentNo, marks, remarks, grade, percentage, totalMarks, year } =
    req.body;

  const data = await prisma.marks.create({
    data: {
      EnrollmentNo,
      marks,
      remarks: "PASS",
      grade,
      percentage,
      totalMarks,
      year,
    },
  });

  res.json({ ok: true, data });
}

export async function exmformsfetch(req: Request, res: Response) {
  const data = await prisma.examForm.findMany({
    where: {},
    include: {
      enrollment: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  res.json({ ok: true, data });
}

export async function marksheetfetch(req: Request, res: Response) {
  // central admin fetch korbe eta
  //Marksheet Verify page e
  // jei branch er admin sei branch er enrollment and form fillup dekhte parbe
  const data = await prisma.marks.findMany({
    where: {
      enrollment: {
        centerid: 1,
      },
    },
    include: {
      enrollment: {
        select: {
          name: true,
          father: true,
          dob: true,
        },
        include: {
          course: {
            select: {
              CName: true,
            },
          },
          center: {
            select: {
              Centername: true,
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

  res.json({ ok: true, data });
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

  res.json({ data });
}

export async function examFormFillup(req: Request, res: Response) {
  const { enrollmentNo } = req.body;

  const data = await prisma.examForm.create({
    data: {
      EnrollmentNo: enrollmentNo,
    },
  });

  res.json({ ok: true, data });
}

// enrollment activated on thakle id card download korte parbe
// examform fillup verified thakle admit download kora jabe
// marksheet e pass thakle certificate download kora jabe and always result download hobe
