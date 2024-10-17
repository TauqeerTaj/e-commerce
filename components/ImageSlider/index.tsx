// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Image from "next/image";
// import Image1 from "@/assests/slider-img/game-controller.png";
// import { Box } from "@mui/material";
// //Images
// import Rating from "@/assests/rating.png";
// import Heart from "@/assests/heart.png";
// import View from "@/assests/view.png";
// //Styles
// import Styles from "@/styles/slider.module.css";

// const Slider = () => {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };
//   return (
//     <>
//       <Carousel
//         swipeable={true}
//         draggable={true}
//         showDots={false}
//         responsive={responsive}
//         ssr={true} // means to render carousel on server-side.
//         infinite={true}
//         autoPlay={true}
//         autoPlaySpeed={1000}
//         keyBoardControl={true}
//         rewind={true}
//         customTransition="all .5"
//         transitionDuration={500}
//         containerClass="carousel-container"
//         removeArrowOnDeviceType={["tablet", "mobile"]}
//         dotListClass="custom-dot-list-style"
//         itemClass="carousel-item-padding-40-px"
//       >
//         <Box>
//           <Box
//             sx={{
//               backgroundColor: "#F5F5F5",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               padding: "50px 5px",
//             }}
//           >
//             <Image src={Image1} alt="product" />
//             <Box className={Styles.discountOffer}>-40%</Box>
//             <Box className={Styles.productIcon}>
//               <Image src={Heart} alt="product-icon" width={40} height={40} />
//               <Image src={View} alt="product-icon" width={40} height={40} />
//             </Box>
//           </Box>
//           <Box className={Styles.productHeading}>HAVIT HV-G92 Gamepad</Box>
//           <Box className={Styles.productPrice}>
//             $120 <s>$160</s>
//           </Box>
//           <Box className={Styles.productRating}>
//             {[1, 2, 3, 4, 5].map((item) => (
//               <Image
//                 src={Rating}
//                 alt="rating"
//                 key={item}
//                 style={{ marginRight: 5 }}
//               />
//             ))}
//           </Box>
//         </Box>
//         <Box>
//           <Box
//             sx={{
//               backgroundColor: "#F5F5F5",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               padding: "50px 5px",
//             }}
//           >
//             <Image src={Image1} alt="product" />
//             <Box className={Styles.discountOffer}>-40%</Box>
//             <Box className={Styles.productIcon}>
//               <Image src={Heart} alt="product-icon" width={40} height={40} />
//               <Image src={View} alt="product-icon" width={40} height={40} />
//             </Box>
//           </Box>
//           <Box className={Styles.productHeading}>HAVIT HV-G92 Gamepad</Box>
//           <Box className={Styles.productPrice}>
//             $120 <s>$160</s>
//           </Box>
//           <Box className={Styles.productRating}>
//             {[1, 2, 3, 4, 5].map((item) => (
//               <Image
//                 src={Rating}
//                 alt="rating"
//                 key={item}
//                 style={{ marginRight: 5 }}
//               />
//             ))}
//           </Box>
//         </Box>
//         <Box>
//           <Box
//             sx={{
//               backgroundColor: "#F5F5F5",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               padding: "50px 5px",
//             }}
//           >
//             <Image src={Image1} alt="product" />
//             <Box className={Styles.discountOffer}>-40%</Box>
//             <Box className={Styles.productIcon}>
//               <Image src={Heart} alt="product-icon" width={40} height={40} />
//               <Image src={View} alt="product-icon" width={40} height={40} />
//             </Box>
//           </Box>
//           <Box className={Styles.productHeading}>HAVIT HV-G92 Gamepad</Box>
//           <Box className={Styles.productPrice}>
//             $120 <s>$160</s>
//           </Box>
//           <Box className={Styles.productRating}>
//             {[1, 2, 3, 4, 5].map((item) => (
//               <Image
//                 src={Rating}
//                 alt="rating"
//                 key={item}
//                 style={{ marginRight: 5 }}
//               />
//             ))}
//           </Box>
//         </Box>
//         <Box>
//           <Box
//             sx={{
//               backgroundColor: "#F5F5F5",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               padding: "50px 5px",
//             }}
//           >
//             <Image src={Image1} alt="product" />
//             <Box className={Styles.discountOffer}>-40%</Box>
//             <Box className={Styles.productIcon}>
//               <Image src={Heart} alt="product-icon" width={40} height={40} />
//               <Image src={View} alt="product-icon" width={40} height={40} />
//             </Box>
//           </Box>
//           <Box className={Styles.productHeading}>HAVIT HV-G92 Gamepad</Box>
//           <Box className={Styles.productPrice}>
//             $120 <s>$160</s>
//           </Box>
//           <Box className={Styles.productRating}>
//             {[1, 2, 3, 4, 5].map((item) => (
//               <Image
//                 src={Rating}
//                 alt="rating"
//                 key={item}
//                 style={{ marginRight: 5 }}
//               />
//             ))}
//           </Box>
//         </Box>
//       </Carousel>
//     </>
//   );
// };

// export default Slider;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import Image from "next/image";
//Images
import Rating from "@/assests/rating.png";
import Heart from "@/assests/heart.png";
import View from "@/assests/view.png";
import Image1 from "@/assests/slider-img/game-controller.png";
//Styles
import Styles from "@/styles/slider.module.css";

export default function SliderComponent() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Box p={3} className={Styles.mainSlider}>
      <Slider {...settings}>
        <Box className={Styles.productItem}>
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
            <Image src={Image1} alt="product" />
            <Box className={Styles.discountOffer}>-40%</Box>
            <Box className={Styles.productIcon}>
              <Image src={Heart} alt="product-icon" width={40} height={40} />
              <Image src={View} alt="product-icon" width={40} height={40} />
            </Box>
          </Box>
          <Box className={Styles.productHeading}>HAVIT HV-G92 Gamepad</Box>
          <Box className={Styles.productPrice}>
            $120 <s>$160</s>
          </Box>
          <Box className={Styles.productRating}>
            {[1, 2, 3, 4, 5].map((item) => (
              <Image
                src={Rating}
                alt="rating"
                key={item}
                style={{ marginRight: 5 }}
              />
            ))}
          </Box>
        </Box>
        <Box className={Styles.productItem}>
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
            <Image src={Image1} alt="product" />
            <Box className={Styles.discountOffer}>-40%</Box>
            <Box className={Styles.productIcon}>
              <Image src={Heart} alt="product-icon" width={40} height={40} />
              <Image src={View} alt="product-icon" width={40} height={40} />
            </Box>
          </Box>
          <Box className={Styles.productHeading}>HAVIT HV-G92 Gamepad</Box>
          <Box className={Styles.productPrice}>
            $120 <s>$160</s>
          </Box>
          <Box className={Styles.productRating}>
            {[1, 2, 3, 4, 5].map((item) => (
              <Image
                src={Rating}
                alt="rating"
                key={item}
                style={{ marginRight: 5 }}
              />
            ))}
          </Box>
        </Box>
        <Box className={Styles.productItem}>
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
            <Image src={Image1} alt="product" />
            <Box className={Styles.discountOffer}>-40%</Box>
            <Box className={Styles.productIcon}>
              <Image src={Heart} alt="product-icon" width={40} height={40} />
              <Image src={View} alt="product-icon" width={40} height={40} />
            </Box>
          </Box>
          <Box className={Styles.productHeading}>HAVIT HV-G92 Gamepad</Box>
          <Box className={Styles.productPrice}>
            $120 <s>$160</s>
          </Box>
          <Box className={Styles.productRating}>
            {[1, 2, 3, 4, 5].map((item) => (
              <Image
                src={Rating}
                alt="rating"
                key={item}
                style={{ marginRight: 5 }}
              />
            ))}
          </Box>
        </Box>
        <Box className={Styles.productItem}>
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
            <Image src={Image1} alt="product" />
            <Box className={Styles.discountOffer}>-40%</Box>
            <Box className={Styles.productIcon}>
              <Image src={Heart} alt="product-icon" width={40} height={40} />
              <Image src={View} alt="product-icon" width={40} height={40} />
            </Box>
          </Box>
          <Box className={Styles.productHeading}>HAVIT HV-G92 Gamepad</Box>
          <Box className={Styles.productPrice}>
            $120 <s>$160</s>
          </Box>
          <Box className={Styles.productRating}>
            {[1, 2, 3, 4, 5].map((item) => (
              <Image
                src={Rating}
                alt="rating"
                key={item}
                style={{ marginRight: 5 }}
              />
            ))}
          </Box>
        </Box>
        <Box className={Styles.productItem}>
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
            <Image src={Image1} alt="product" />
            <Box className={Styles.discountOffer}>-40%</Box>
            <Box className={Styles.productIcon}>
              <Image src={Heart} alt="product-icon" width={40} height={40} />
              <Image src={View} alt="product-icon" width={40} height={40} />
            </Box>
          </Box>
          <Box className={Styles.productHeading}>HAVIT HV-G92 Gamepad</Box>
          <Box className={Styles.productPrice}>
            $120 <s>$160</s>
          </Box>
          <Box className={Styles.productRating}>
            {[1, 2, 3, 4, 5].map((item) => (
              <Image
                src={Rating}
                alt="rating"
                key={item}
                style={{ marginRight: 5 }}
              />
            ))}
          </Box>
        </Box>
      </Slider>
    </Box>
  );
}
