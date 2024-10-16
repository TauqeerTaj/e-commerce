import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function FlashSale() {
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
                {" "}
                Today&apos;s
              </Typography>
            </Box>
          </Grid>
          <Grid size={12}>
            <Grid container spacing={2}>
              <Grid size={3}>
                <Typography variant="h5" fontWeight="bold">
                  Flash Sales
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
