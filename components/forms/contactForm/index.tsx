import React from "react";
import { Box, TextField, FormControl, Button } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import Grid from "@mui/material/Grid2";
//Style
import Styles from "@/styles/contact.module.css";

export default function ContactForm() {
  return (
    <>
      <Box mt={4} className={Styles.contactForm}>
        <FormControl
          component="form"
          sx={{ width: "100%" }}
          //   onSubmit={submitHandler}
        >
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
              <TextField
                id="name"
                label="Your Name"
                variant="filled"
                name="name"
                required
                fullWidth
                InputProps={{
                  disableUnderline: true, // Disable underline
                }}
                //   value={profileData.name}
                //   onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
              <TextField
                id="email"
                label="Your Email"
                variant="filled"
                name="email"
                required
                fullWidth
                InputProps={{
                  disableUnderline: true, // Disable underline
                }}
                //   value={profileData.name}
                //   onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
              <TextField
                id="phone"
                label="Your Phone"
                variant="filled"
                name="phone"
                required
                fullWidth
                InputProps={{
                  disableUnderline: true, // Disable underline
                }}
                //   value={profileData.name}
                //   onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
              <Textarea
                placeholder="Your Message"
                minRows={8}
                className={Styles.textarea}
              />
            </Grid>
            <Grid
              size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
              textAlign="right"
            >
              <Button
                variant="contained"
                color="error"
                sx={{ textTransform: "capitalize", width: 200, height: 50 }}
                type="submit"
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </Box>
    </>
  );
}
