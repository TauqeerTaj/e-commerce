import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
//Components
import ListCategory from "@/components/categories/ListCategory";
import CarouselComponent from "@/components/CarouselComponent";
import FlashSale from "@/components/FlashSale";
import Slider from "@/components/ImageSlider";

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
            <FlashSale />
          </Grid>
          <Grid size={12} sx={{ mt: 2 }}>
            <Slider />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Home;
