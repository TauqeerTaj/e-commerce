import React from "react";
import { Box } from "@mui/material";
//Style
import Styles from "@/styles/imageView.module.css";

interface FlashData {
  product: {
    _id: string;
    discount: string;
    image: string;
    priceOff: string;
    productHeading: string;
    productPrice: string;
    detailImages?: {
      front: string;
      back: string;
      left: string;
      right: string;
    };
  };
}

const ImageView: React.FC<FlashData> = ({ product }) => {
  const productImages = product.detailImages
    ? Object.values(product.detailImages).map((value, index) => (
        <Box key={`${product._id}-${index}`} className={Styles.view}>
          <img src={value} alt={`product-${index}`} />
        </Box>
      ))
    : null;

  return <Box>{productImages || <p>No images available</p>}</Box>;
};

export default ImageView;
