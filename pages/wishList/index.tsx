import React from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
//Redux
// import { useAppSelector } from "@/lib/hooks";
//Components
import WishListCard from "@/components/wishList/WishListCard";
//Interfaces
import { PayLoadType } from "@/reduxToolkit/wishListSlice";
import { Product } from "@/constant/detailProduct";

export default function WishList({
  wishListProducts,
}: {
  wishListProducts: Product[];
}) {
  return (
    <>
      <WishListCard product={wishListProducts} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const cookies = context.req.cookies;
    const sessionToken = cookies["next-auth.session-token"];

    const session = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/session`,
      {
        headers: {
          Cookie: `next-auth.session-token=${sessionToken}`,
        },
      }
    );
    const userId = session?.data?.user?.id;

    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/wishList?userId=${userId}`
    );
    const productIds = result?.data?.products.map(
      (product: PayLoadType) => product.productId
    );
    const products = await axios.get(
      `${
        process.env.NEXT_PUBLIC_BASE_URL
      }/api/wishListProducts?productIds=${JSON.stringify(productIds)}`
    );
    const wishListProducts = products?.data?.products || [];
    return {
      props: {
        wishListProducts,
      },
    };
  } catch (error) {
    console.error("Error fetching wishList products:", error);
    return {
      props: {
        wishListProducts: [],
      },
    };
  }
};
