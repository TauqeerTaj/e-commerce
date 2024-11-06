//types
import { Request, Response } from "express";
//lib
import { connectToDatabase } from "@/lib/db";
import { hashPassword } from "@/lib/auth";

const handler = async (req: Request, res: Response) => {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { name, email, password } = data;

  if (!email || !email.includes("@") || !password) {
    res.status(422).json({ message: "Invalid Credentials" });
    return;
  }
  const client = await connectToDatabase();

  const db = client.db();

  const hashedPassword = await hashPassword(password);

  const findUser = await db.collection("users").findOne({
    email,
  });

  if (findUser) {
    res.status(409).json({ message: "User already exists!", findUser });
    client.close();
    return;
  } else {
    const result = await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User created successfully!", result });
    client.close();
  }
};
export default handler;
