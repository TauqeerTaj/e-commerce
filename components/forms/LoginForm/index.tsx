"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
//Material UI Imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
//Styles
import Styles from '@/styles/authForm.module.css'

const LoginForm = () => {
  const router = useRouter();
  return (
    <>
      <Box textAlign="center" component="form">
        <FormControl className={Styles.form} sx={{md: { translate: "0px 150px" }, lg: { translate: "0px 150px" }, xl: { translate: "0px 150px" }}}>
          <Typography
          className={Styles.heading}
            variant="h4"
            style={{ textAlign: "left", marginBottom: 10 }}
          >
            Log in to Exclusive
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: 20, textAlign: "left" }}
          >
            Enter your details below
          </Typography>
          <Stack direction="column" spacing={2}>
            <TextField
              id="email"
              label="Email or Phone Number"
              variant="standard"
            />
            <TextField id="password" label="Password" variant="standard" />
            <Stack
              direction="row"
              spacing={5}
              style={{ marginTop: 50, alignItems: "center" }}
            >
              <Button
                variant="contained"
                color="error"
                sx={{ textTransform: "capitalize", p: 2, width: 120 }}
                onClick={() => router.push("/home")}
              >
                Log In
              </Button>
              <Link href="" style={{ color: "#DB4444", fontWeight: "bold" }}>
                Forget Password?
              </Link>
            </Stack>
          </Stack>
        </FormControl>
      </Box>
    </>
  );
};

export default LoginForm;
