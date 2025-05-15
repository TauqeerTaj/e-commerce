import React from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
//Redux
// import { useAppSelector } from "@/lib/hooks";
//Components
import WishListCard from "@/components/wishList/WishListCard";
//Interfaces
import { PayLoadType } from "@/reduxToolkit/wishListSlice";

export default function WishList({
  wishListProducts,
}: {
  wishListProducts: PayLoadType[];
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
    const wishListProducts = result?.data?.products || [];
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
