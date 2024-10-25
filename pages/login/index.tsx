import Image from "next/image";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import BackgroundImage from "@/assests/auth-bg.png";
import LoginForm from "@/components/forms/LoginForm";

//styles
import Styles from "@/styles/authForm.module.css";

const Login = () => {
  return (
    <>
      <Box component="section" className={Styles.signup}>
        <Grid container spacing={2}>
          <Grid size={{xs: 12, sm: 12, md: 6, lg: 6, xl: 6}}>
            <Box>
              {" "}
              <Image
                src={BackgroundImage}
                alt="background-image"
                className={Styles.bgImage}
              />
            </Box>
          </Grid>
          <Grid size={{xs: 12, sm: 12, md: 6, lg: 6, xl: 6}}>
            <LoginForm />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
