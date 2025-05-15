// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
//lib
import { connectToDatabase } from "@/lib/db";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await connectToDatabase();

  const db = client.db();

  const { id } = req.query;

  try {
    // Fetch wishList products from the database
    await db
      .collection("wishList")
      .deleteOne({ _id: new ObjectId(typeof id === "string" ? id : "") });

    res.status(200).json({ message: "Product Deleted Successfully" });
    client.close();
  } catch (error) {
    console.error("Error fetching wishList Products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
