import React from "react";
import Image from "next/image";
import { Box, Typography, Divider } from "@mui/material";
//Images
import CallImage from "@/assests/call.png";
import MessageImage from "@/assests/message.png";
//Style
import Styles from "@/styles/contact.module.css";

export default function ContactInfo() {
  return (
    <>
      <Box mt={4} className={Styles.contactInfo}>
        <Typography className={Styles.heading}>
          <Box className={Styles.imageWrapper}>
            <Image src={CallImage} alt="message-icon" width={15} height={0} />
          </Box>
          Call To Us
        </Typography>
        <Typography mt={2}>We are available 24/7, 7 days a week.</Typography>
        <Typography mt={2}>Phone: +8801611112222</Typography>
        <Divider sx={{ my: 3 }} />
        <Typography className={Styles.heading}>
          <Box className={Styles.imageWrapper}>
            <Image
              src={MessageImage}
              alt="message-icon"
              width={15}
              height={0}
            />
          </Box>
          Write To Us
        </Typography>
        <Typography mt={2}>
          Fill out our form and we will contact you within 24 hours.
        </Typography>
        <Typography mt={2}>Emails: customer@exclusive.com</Typography>
        <Typography mt={2}>Emails: support@exclusive.com</Typography>
      </Box>
    </>
  );
}
