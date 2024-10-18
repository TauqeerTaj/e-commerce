import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
//Interface
import { SliderHeaderType } from "@/constant/sliderHeaderInterface";

 const SliderHeader: React.FC<SliderHeaderType> = ({identity, heading}) => {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                component="span"
                sx={{
                  height: 30,
                  backgroundColor: "#DB4444",
                  padding: "8px",
                  marginRight: 2,
                  borderRadius: "3px 3px 3px 3px",
                }}
              ></Typography>
              <Typography color="#DB4444" fontWeight="bold">
                {identity}
              </Typography>
            </Box>
          </Grid>
          <Grid size={12}>
            <Grid container spacing={2}>
              <Grid size={3}>
                <Typography variant="h5" fontWeight="bold">
                  {heading}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default SliderHeader