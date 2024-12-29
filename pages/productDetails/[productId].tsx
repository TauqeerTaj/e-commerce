import React, { useState } from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
//Material UI
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
//Components
import ImageView from "@/components/detail_Image_View/ImageView";
import ProductInfo from "@/components/detail_Image_View/ProductInfo";
import SliderHeader from "@/components/SliderHeader";
import SliderComponent from "@/components/ImageSlider/ProductSlider";
//Interface
import { DetailProduct } from "@/constant/detailProduct";
//Styles
import Styles from "@/styles/imageView.module.css";

interface Params extends ParsedUrlQuery {
  productId: string;
}

const ProductDetails: React.FC<DetailProduct> = ({
  product,
  relatedProducts,
}) => {
  const [selectedImage, setSelectedImage] = useState(
    product.detailImages.front
  );

  const selectImageHandler = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <Box px={3} mt={4}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2, xl: 2 }}>
          <ImageView
            product={product}
            selectImageHandler={selectImageHandler}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 5 }}>
          <ImageView
            product={{
              ...product,
              detailImages: {
                selectedImage,
              },
            }}
          />
        </Grid>
        {/* Product Info */}
        <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 5 }}>
          <ProductInfo product={product} />
        </Grid>
        {/* Related Items */}
        <Grid size={12} sx={{ mt: 6 }}>
          <SliderHeader identity="Related Item" heading="" />
        </Grid>
        <Grid size={12} textAlign="center">
          <Box className={Styles.detailSlider}>
            <SliderComponent
              setting={{
                arrows: false,
                button: "",
                rows: "single",
              }}
              sliderCard={relatedProducts || []}
            />
          </Box>
        </Grid>
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

    const relatedProductsResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/relatedItem?category=${product.data?.product.category}`
    );

    const relatedProducts = relatedProductsResponse.data?.products || [];

    return {
      props: {
        product: product.data.product,
        relatedProducts,
      },
    };
  } catch (error) {
    console.error("Error fetching product Details:", error);
    return {
      props: {
        product: null,
        relatedProducts: [],
      },
    };
  }
};

export default ProductDetails;
