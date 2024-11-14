// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
//lib
import { connectToDatabase } from "@/lib/db";
import { hashPassword } from "@/lib/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    if (req.method !== "POST") {
        return;
      }

    const data = req.body;

    const { name, email, updatedEmail, newPassword, address } = data;

    if (!updatedEmail || !updatedEmail.includes("@") || !newPassword) {
        res.status(422).json({ message: "Invalid Credentials" });
        return;
      }

    const client = await connectToDatabase();

    const db = client.db();

    const hashedPassword = await hashPassword(newPassword);

    const updatedUser = await db.collection("users").updateOne({email},
    { $set: { name, email:updatedEmail, password: hashedPassword, address }});

    if(updatedUser) {
        res.status(201).json({ message: "User updated successfully!", updatedUser });
        client.close();
    }
}
