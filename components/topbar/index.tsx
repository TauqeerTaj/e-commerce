import React from "react";
import Box from "@mui/material/Box";

export default function Topbar() {
  return (
    <Box
      sx={{
        bgcolor: "black",
        color: "#fff",
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "14px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
    </Box>
  );
}
