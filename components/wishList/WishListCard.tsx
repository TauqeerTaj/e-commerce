import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Typography, Button } from "@mui/material";
//Components
import SliderComponent from "@/components/ImageSlider/ProductSlider";
//Interface
import { PayLoadType } from "@/reduxToolkit/wishListSlice";
import ProductCard from "../common/ProductCard";

type WishListCardProps = {
  product: PayLoadType[];
};

const WishListCard: React.FC<WishListCardProps> = ({ product }) => {
  return (
    <Box sx={{ mx: 3, mt: 7 }}>
      <Grid container spacing={2}>
        <Grid size={12} mx={4} mb={7}>
          <Grid container spacing={2}>
            <Grid size={6}>
              <Typography>WishList ({product.length})</Typography>
            </Grid>
            <Grid size={6} textAlign={"right"}>
              <Button
                sx={{
                  color: "#000",
                  border: "1px solid #ccc",
                  fontSize: "10px",
                  textTransform: "capitalize",
                }}
              >
                Move All To Bag
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12} textAlign="center">
          {product?.length > 4 ? (
            <SliderComponent
              setting={{
                arrows: true,
                button: "",
                rows: "single",
              }}
              sliderCard={product}
              trash={true}
            />
          ) : product?.length < 4 && product?.length > 0 ? (
            <Grid container spacing={2}>
              {product?.map((productItem) => (
                <Grid size={3} textAlign="center" key={productItem._id}>
                  <ProductCard data={productItem} trash={true} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid size={12} textAlign="center" sx={{ mb: 5 }}>
              <Typography>No products in your wish list !</Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
export default WishListCard;
