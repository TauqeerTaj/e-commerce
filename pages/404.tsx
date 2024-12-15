// /pages/404.js
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import BreadCrumbs from "@/components/common/breadCrumb";
//Style
import Styles from "@/styles/error.module.css";

export default function Custom404() {
  return (
    <Box px={3} mt={4}>
      <BreadCrumbs
        navigation={[
          {
            step: "Home",
            path: "/home",
          },
          {
            step: "404 Error",
            path: "/error",
          },
        ]}
      />
      <Box mt={4} textAlign="center" mb={20}>
        <h1 className={Styles.heading}>404 Not Found</h1>
        <Typography my={5}>
          Your visited page not found. You may go home page.
        </Typography>
        <Link href="/home" className={Styles.button}>
          Back to home page
        </Link>
      </Box>
    </Box>
  );
}
