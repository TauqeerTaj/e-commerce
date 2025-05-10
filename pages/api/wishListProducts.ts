import type { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
//lib
import { connectToDatabase } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await connectToDatabase();

  const db = client.db();

  try {
    const productIds =
      req.query.productIds && typeof req.query.productIds === "string"
        ? JSON.parse(req.query.productIds)
        : [];
    const objectIds = productIds.map((id: string) => new ObjectId(id));
    // Fetch wishList products from the database
    const products = await db
      .collection("products")
      .find({ _id: { $in: objectIds } })
      .toArray();

    res.status(200).json({ message: "wishList Products", products });
    client.close();
  } catch (error) {
    console.error("Error fetching wishList Products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
