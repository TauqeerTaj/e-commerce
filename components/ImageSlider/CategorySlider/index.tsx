import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button } from "@mui/material";
import Image from "next/image";
//Interface
import { SliderCategoryList, SliderCategoryType } from "@/constant/sliderInterface";
//Styles
import Styles from "@/styles/slider.module.css";
import React from "react";

const CategorySlider: React.FC<SliderCategoryList> = ({sliderCategoryCard}) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <Box p={3} className={Styles.mainSlider}>
      <Slider {...settings}>
        {sliderCategoryCard.map((data: SliderCategoryType) => (
          <Box className={Styles.productItem} key={data.productHeading}>
          <Box
            className={Styles.categoryBox}
            sx={{
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: " 20px 0px 20px 0px",
              position: "relative",
              border: '1px solid #f5f5f5',
            }}
          >
            <Image src={data.image as HTMLImageElement} alt="product" />
            <Box sx={{mt:3}}>{data.productHeading}</Box>
          </Box>
        </Box>
        ))}
      </Slider>
    </Box>
  );
}
export default CategorySlider