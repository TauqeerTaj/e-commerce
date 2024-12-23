import React from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
//Material UI
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
//Components
import ImageView from "@/components/detail_Image_View/ImageView";

interface Params extends ParsedUrlQuery {
  productId: string;
}
interface FlashData {
  product: {
    _id: string;
    discount: string;
    image: string;
    priceOff: string;
    productHeading: string;
    productPrice: string;
    detailImages: {
      front: string;
      back: string;
      left: string;
      right: string;
    };
  };
}

const ProductDetails: React.FC<FlashData> = ({ product }) => {
  return (
    <Box px={3} mt={4}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2, xl: 2 }}>
          <ImageView product={product} />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 5 }}></Grid>
        <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 5 }}></Grid>
      </Grid>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { productId } = params as Params;
  try {
    const product = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/productDetails?productId=${productId}`
    );
    if (!product.data) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        product: product.data.product,
      },
    };
  } catch (error) {
    console.error("Error fetching product Details:", error);
    return {
      props: {
        product: null,
      },
    };
  }
};

export default ProductDetails;
