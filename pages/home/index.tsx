import Grid from "@mui/material/Grid2";
import { Box, Divider } from "@mui/material";
//Components
import ListCategory from "@/components/categories/ListCategory";
import CarouselComponent from "@/components/CarouselComponent";
import SliderHeader from "@/components/SliderHeader";
import SliderComponent from "@/components/ImageSlider/ProductSlider";
import CategorySlider from "@/components/ImageSlider/CategorySlider";
//category-slider-images
import Phone from "@/assests/category-slider-img/Category-CellPhone.png"
import Computer from "@/assests/category-slider-img/Category-Computer.png"
import Watch from "@/assests/category-slider-img/Category-SmartWatch.png"
import Camera from "@/assests/category-slider-img/Category-Camera.png"
import HeadPhone from "@/assests/category-slider-img/Category-Headphone.png"
import Gaming from "@/assests/category-slider-img/Category-Gamepad.png"
//Constant
import { sliderCard, sliderCategoryCard } from "@/constant/sliderContent";

const Home = () => {
  return (
    <>
      <Box sx={{ mx: 3 }}>
        <Grid container spacing={2}>
          <Grid size={3}>
            <ListCategory />
          </Grid>
          <Grid size={9} sx={{ pt: 6 }}>
            <CarouselComponent />
          </Grid>
          <Grid size={12} sx={{ mt: 6 }}>
            <SliderHeader identity="Today's"
            heading='Flash Sales'/>
          </Grid>
          <Grid size={12} textAlign='center'>
            <SliderComponent 
            sliderCard = {sliderCard}
            />
          </Grid>
        </Grid>
        <Divider sx={{my: 3}}/>
        <Grid size={12} sx={{ mt: 6 }}>
          <SliderHeader identity="Categories"
          heading='Browse By Category'/>
        </Grid>
        <Grid size={12} textAlign='center'>
        <CategorySlider 
          sliderCategoryCard = {sliderCategoryCard}
          />
        </Grid>
      </Box>
    </>
  );
};
export default Home;
