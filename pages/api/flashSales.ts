// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
//lib
import { connectToDatabase } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();

  const flashProducts = await db
    .collection("products")
    .find({ discount: { $not: { $eq: "" } } })
    .toArray();

  if (flashProducts) {
    res.status(200).json({ message: "list of Flash Sales", flashProducts });
    client.close();
  }
}
