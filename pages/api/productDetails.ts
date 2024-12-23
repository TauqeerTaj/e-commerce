import type { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
// lib
import { connectToDatabase } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { productId } = req.query;

  if (!productId || typeof productId !== "string") {
    return res.status(400).json({ error: "Invalid productId" });
  }

  try {
    const client = await connectToDatabase();
    const db = client.db();

    // Validate if the productId is a valid ObjectId
    if (!ObjectId.isValid(productId)) {
      return res.status(400).json({ error: "Invalid productId format" });
    }

    // Fetch product details from the database
    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(productId) });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ message: "Product Details", product });
    client.close();
  } catch (error) {
    console.error("Error fetching product details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
