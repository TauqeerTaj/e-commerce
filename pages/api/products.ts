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

  const products = await db
    .collection("products")
    .find({ discount: "" })
    .limit(15)
    .toArray();

  if (products) {
    res.status(200).json({ message: "list of products", products });
    client.close();
  }
}
