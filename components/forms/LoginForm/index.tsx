"use client";

import React from 'react'
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import  {signIn} from "next-auth/react";
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
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: user.email,
        password: user.password
      })
      console.log('result:', result)
    } catch (error) {
      console.log('signIn error:', error)
    }
  }
  return (
    <>
      <Box textAlign="center">
        <FormControl component="form" onSubmit={submitHandler} className={Styles.form} sx={{md: { translate: "0px 150px" }, lg: { translate: "0px 150px" }, xl: { translate: "0px 150px" }}}>
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
                type='submit'
                sx={{ textTransform: "capitalize", p: 2, width: 120 }}
                // onClick={() => router.push("/home")}
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
