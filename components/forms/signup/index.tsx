"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
//Material UI Imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/material";
//Images
import GoogleImage from "@/assests/google.png";

const SignupForm = () => {
  const router = useRouter();
  return (
    <>
      <Box textAlign="center" component="form">
        <FormControl sx={{ translate: "0px 90px" }}>
          <Typography
            variant="h4"
            style={{ textAlign: "left", marginBottom: 10 }}
          >
            Create an account
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: 20, textAlign: "left" }}
          >
            Enter your details below
          </Typography>
          <Stack direction="column" spacing={2}>
            <TextField id="name" label="Name" variant="standard" />
            <TextField
              id="email"
              label="Email or Phone Number"
              variant="standard"
            />
            <TextField id="password" label="Password" variant="standard" />
            <Button
              variant="contained"
              color="error"
              sx={{ textTransform: "capitalize", p: 2 }}
              style={{ marginTop: 40 }}
              onClick={() => router.push("/login")}
            >
              Create Account
            </Button>
            <Button
              variant="outlined"
              startIcon={<Image src={GoogleImage} alt="google-icon" />}
              sx={{
                textTransform: "none",
                p: 2,
                border: "1px solid #ccc",
                color: "#000",
              }}
            >
              Sign up with Google
            </Button>
            <Typography variant="body1" textAlign="center">
              Already have account?{" "}
              <Link
                href="/login"
                style={{
                  borderBottom: "1px solid #000",
                  paddingBottom: 3,
                  marginLeft: 5,
                }}
              >
                Log in
              </Link>
            </Typography>
          </Stack>
        </FormControl>
      </Box>
    </>
  );
};

export default SignupForm;
