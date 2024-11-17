import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button } from "@mui/material";
import Image from "next/image";
//Interface
import { SliderContentList, SliderTypes } from "@/constant/sliderInterface";
//Styles
import Styles from "@/styles/slider.module.css";

const SliderComponent: React.FC<SliderContentList> = ({
  sliderCard,
  setting,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: setting?.arrows,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box p={3} className={Styles.mainSlider}>
      <Slider {...settings}>
        {sliderCard.map((data: SliderTypes) => (
          <>
            <Box className={Styles.productItem} key={data.productHeading}>
              <Box
                sx={{
                  backgroundColor: "#F5F5F5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "50px 5px",
                  position: "relative",
                }}
              >
                <Image src={data.image as HTMLImageElement} alt="product" />
                {data.discount && (
                  <Box className={Styles.discountOffer}>{data.discount}</Box>
                )}
                <Box className={Styles.productIcon}>
                  <Image
                    src={data.favouriteIcon as HTMLImageElement}
                    alt="product-icon"
                    width={40}
                    height={40}
                  />
                  <Image
                    src={data.viewIcon as HTMLImageElement}
                    alt="product-icon"
                    width={40}
                    height={40}
                  />
                </Box>
                <Box className={Styles.addToCart}>Add To Cart</Box>
              </Box>
              <Box className={Styles.productHeading}>{data.productHeading}</Box>
              <Box className={Styles.productPrice}>
                {data.productPrice} {data.priceOff}
              </Box>
              <Box className={Styles.productRating}>
                {[1, 2, 3, 4, 5].map((item) => (
                  <Image
                    src={data.rating as HTMLImageElement}
                    alt="rating"
                    key={item}
                    style={{ marginRight: 5 }}
                  />
                ))}
              </Box>
            </Box>
            {setting.rows === "double" && (
              <Box className={Styles.productItem} key={data.productHeading}>
                <Box
                  sx={{
                    backgroundColor: "#F5F5F5",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "50px 5px",
                    position: "relative",
                    marginTop: 5,
                  }}
                >
                  <Image src={data.image as HTMLImageElement} alt="product" />
                  {data.discount && (
                    <Box className={Styles.discountOffer}>{data.discount}</Box>
                  )}
                  <Box className={Styles.productIcon}>
                    <Image
                      src={data.favouriteIcon as HTMLImageElement}
                      alt="product-icon"
                      width={40}
                      height={40}
                    />
                    <Image
                      src={data.viewIcon as HTMLImageElement}
                      alt="product-icon"
                      width={40}
                      height={40}
                    />
                  </Box>
                  <Box className={Styles.addToCart}>Add To Cart</Box>
                </Box>
                <Box className={Styles.productHeading}>
                  {data.productHeading}
                </Box>
                <Box className={Styles.productPrice}>
                  {data.productPrice} {data.priceOff}
                </Box>
                <Box className={Styles.productRating}>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Image
                      src={data.rating as HTMLImageElement}
                      alt="rating"
                      key={item}
                      style={{ marginRight: 5 }}
                    />
                  ))}
                </Box>
              </Box>
            )}
          </>
        ))}
      </Slider>
      {setting.button === "small" ? (
        <Button className={Styles.viewButtonSmall}>View All</Button>
      ) : (
        <Button className={Styles.viewButton}>View All Products</Button>
      )}
    </Box>
  );
};
export default SliderComponent;
