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
      front?: string;
      back?: string;
      left?: string;
      right?: string;
      selectedImage?: string;
    };
  };
  selectImageHandler?: (image: string) => void;
}

const ImageView: React.FC<FlashData> = ({ product, selectImageHandler }) => {
  const productImages = product.detailImages
    ? Object.values(product.detailImages).map((value, index) => (
        <Box
          key={`${product._id}-${index}`}
          className={Styles.view}
          onMouseOver={
            selectImageHandler ? () => selectImageHandler(value) : () => {}
          }
        >
          <img src={value} alt={`product-${index}`} />
        </Box>
      ))
    : null;

  return (
    <Box
      className={product.detailImages?.selectedImage ? Styles.ShowProduct : ""}
    >
      {productImages || <p>No images available</p>}
    </Box>
  );
};

export default ImageView;
