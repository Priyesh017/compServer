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
    const { accessToken } = req.cookies;

    if (!accessToken) {
      res.json({ loggedIn: false });
      return;
    }
    const user = jwt.verify(accessToken, process.env.TOKEN_SECRET!);

    res.json({ loggedIn: true, user });
  } catch (err) {
    res.json({ loggedIn: false }).status(401);
  }
}

export async function logoutfunc(req: Request, res: Response) {
  try {
    res
      .clearCookie("accessToken", {
        ...accessTokenCookieOptions,
        maxAge: 0,
      })

      .json({ success: true });
  } catch (error) {
    console.log(error);
  }
}

export async function enrollCheck(req: Request, res: Response) {
  const no = req.query.id as string;

  const val = prisma.enrollment.findFirst({
    where: {
      Enrollmentno: no,
    },
  });

  res.json(val);
}

export async function createEnrollment(req: Request, res: Response) {
  //check if its from any center
  const {
    name,
    dob,
    father,
    mother,
    address,
    mobNo,
    wpno,
    coursename,
    qualification,
  } = req.body;
}

export async function ActivateEnrollment(req: Request, res: Response) {
  const { id } = req.body;
  const val = prisma.enrollment.update({
    where: {
      id,
    },
    data: {
      activated: true,
    },
  });

  res.json(val);
}

export async function deActivateEnrollment(req: Request, res: Response) {
  const { id } = req.body;
  const val = prisma.enrollment.update({
    where: {
      id,
    },
    data: {
      activated: false,
    },
  });

  res.json(val);
}

export async function createCenter(req: Request, res: Response) {
  const { locationX, locationY, name, adminId } = req.body;

  const data = prisma.center.create({
    data: {
      locationX,
      locationY,
      name,
      admin: {
        connect: {
          id: adminId, // assuming adminId is passed in the request body
        },
      },
    },
  });

  res.json(data);
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
  // only center

  fillCertificate().catch((err) => console.error(err));
  res.json({ data: "kuch hua hai" });
}

export async function generateadmit(req: Request, res: Response) {
  filladmit().catch((err) => console.error(err));
  res.json({ data: "kuch hua haiiii" });
}

export async function generateId(req: Request, res: Response) {
  fillId().catch((err) => console.error(err));
  res.json({ data: "kuch hua haiiii<3" });
}

export async function generateMarksheet(req: Request, res: Response) {
  fillMarksheet().catch((err) => console.error(err));
  res.json({ data: "kuch hua haiiii" });
}

export async function exmformfillup(req: Request, res: Response) {}

//branch admin enroll notification goes to central admin
// branch exam form fillup

// branch admin en

// enrollment activated on thakle id card download korte parbe
// examform fillup verified thakle admit download kora jabe
// marksheet e pass thakle certificate download kora jabe and always result download hobe
