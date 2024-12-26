"use client";

import React, { useState } from "react";
import { Box, Typography, Divider, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
//Images
import RatingStart from "@/assests/rating.png";
import Heart from "@/assests/heart.png";
import Return from "@/assests/Icon-return.png";
//Interface
import { DetailProduct } from "@/constant/detailProduct";
//Styles
import Styles from "@/styles/imageView.module.css";

const ProductDetails: React.FC<DetailProduct> = ({ product }) => {
  const [selectedColour, setSelectedColour] = useState(product.colour);
  const [productSize, setProductSize] = useState("");
  const [count, setCount] = useState(0);

  const sizes = ["XS", "S", "M", "L", "XL"];

  const colourHandler = (colour: string) => {
    setSelectedColour(colour);
  };

  const sizeHandler = (size: string) => {
    setProductSize(size);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Box>
      <Grid container spacing={0}>
        <Grid size={12}>
          <Typography variant="h6" fontWeight="bold">
            {product.productHeading}
          </Typography>
        </Grid>
        <Grid size={12}>
          <Box>
            {Array(product.rating)
              .fill("")
              .map((_, index) => (
                <Image
                  src={RatingStart}
                  key={index}
                  width={15}
                  height={15}
                  alt="rating"
                  style={{ marginRight: 3 }}
                />
              ))}
            <Typography display="inline" className={Styles.reviews}>{`(${
              product?.reviews?.length || 0
            } Reviews)`}</Typography>
            <Typography
              display="inline"
              color={product.availability ? "#00FF66" : "#DB4444"}
            >
              {product.availability ? "In Stock" : "Sold Out"}
            </Typography>
          </Box>
        </Grid>
        <Grid size={12}>
          <Typography mt={1}>{product.productPrice}.00</Typography>
        </Grid>
        <Grid size={12}>
          <Typography mt={1}>{product.description}</Typography>
        </Grid>
        <Grid size={12}>
          <Divider sx={{ my: 2, border: "1px solid #828282" }} />
        </Grid>
        <Grid size={12}>
          <Typography>
            Colours:{" "}
            {product?.available_colours.map((colour: string) => (
              <Box
                key={colour}
                display="inline"
                className={Styles.productColours}
                bgcolor={colour}
                border={2}
                borderColor={selectedColour === colour ? "#000" : "#fff"}
                onClick={() => colourHandler(colour)}
              ></Box>
            ))}
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography mt={4}>
            Size:
            {sizes.map((size) => (
              <Box
                className={Styles.size}
                key={size}
                onClick={() => sizeHandler(size)}
                bgcolor={productSize === size ? "#db4444" : "#fff"}
                color={productSize === size ? "#fff" : "#000"}
                sx={{ width: "100px !important" }}
              >
                {size}
              </Box>
            ))}
          </Typography>
        </Grid>
        <Grid size={12}>
          <Box mt={4} display="flex" alignItems="center">
            <Box className={Styles.counter}>
              <Button onClick={() => decrementCount()}>-</Button>
              <Typography display="inline" px={3} className={Styles.countNum}>
                {count}
              </Typography>
              <Button onClick={() => incrementCount()}>+</Button>
            </Box>
            <Button className={Styles.buyButton}>Buy Now</Button>
            <Box className={Styles.like}>
              <Image src={Heart} width={20} height={20} alt="like" />
            </Box>
          </Box>
        </Grid>
        <Grid size={12} mt={4}>
          <Box className={Styles.delivery}>
            <Grid container spacing={0}>
              <Grid size={2}>
                <Image src={Return} width={0} height={0} alt="return" />
              </Grid>
              <Grid size={10}>
                <Typography>Return Delivery</Typography>
                <Typography>Free 30 Days Delivery Returns. Details</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ProductDetails;
