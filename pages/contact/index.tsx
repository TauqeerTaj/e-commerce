import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
//Components
import BreadCrumbs from "@/components/common/breadCrumb";
import ContactInfo from "@/components/contactUs/contactInfo";
import ContactForm from "@/components/forms/contactForm";

export default function ContactUs() {
  return (
    <>
      <Box px={3} mt={4}>
        <BreadCrumbs
          navigation={[
            {
              step: "Home",
              path: "/home",
            },
            {
              step: "Contact",
              path: "/contact",
            },
          ]}
        />
      </Box>
      <Box px={3} mt={4} mb={20}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
            <ContactInfo />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 9, lg: 9, xl: 9 }}>
            <ContactForm />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
