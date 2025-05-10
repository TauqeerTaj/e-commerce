import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Typography, Button } from "@mui/material";
//Components
import SliderComponent from "@/components/ImageSlider/ProductSlider";
//Constant
import { sliderCard } from "@/constant/sliderContent";
//Interface
import { Product } from "@/constant/detailProduct";

type WishListCardProps = {
  product: Product[];
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
          <SliderComponent
            setting={sliderCard.setting}
            sliderCard={product}
            trash={true}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default WishListCard;
