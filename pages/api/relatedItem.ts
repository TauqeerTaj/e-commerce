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

  const { category } = req.query;

  try {
    const client = await connectToDatabase();
    const db = client.db();

    // Fetch related Products from the database
    const products = await db
      .collection("products")
      .find({ category: category })
      .toArray();

    if (!products) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ message: "Related Product Details", products });
    client.close();
  } catch (error) {
    console.error("Error fetching product details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
