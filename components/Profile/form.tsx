"use client"

import React, {useState, useEffect} from 'react'
import { Typography, FormControl, Stack, TextField, Button, Box } from "@mui/material"
import Grid from "@mui/material/Grid2"
//Styles
import Styles from '@/styles/profileSidebar.module.css'

function Form() {

    const [profileData, setProfileData] = useState({
        name: '',
        email: '',
        address: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    })
    const [passwordMatch, setPasswordMatch] = useState(false)

    useEffect(()=> {
        if(profileData.confirmPassword.length && profileData.confirmPassword === profileData.newPassword) {
            setPasswordMatch(false)
        }
    },
    [profileData.confirmPassword])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfileData({
          ...profileData,
          [e.target.name]: e.target.value,
        });
      };

      const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        // setLoading(true);
        try {
            if(profileData.newPassword !== profileData.confirmPassword) {
                setPasswordMatch(true)
            }
        //   const result = await createUser(user);
        //   setLoading(false);
        //   toast.success(result.data.message);
        //   router.push("/login");
        } catch (error) {
        //   if (axios.isAxiosError(error)) {
        //     const errResp = error?.response?.data.message;
        //     setLoading(false);
        //     toast.error(errResp);
        //   }
        }
      };

    return (
        <Box sx={{ p: '50px 60px 50px 60px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
        <Typography className={Styles.formHeading}>
        Edit Your Profile
        </Typography>
        <FormControl
          component="form"
          sx={{width: '100%'}}
          // action={authSubmitHandler}
          onSubmit={submitHandler}
        >
          <Stack direction="column" spacing={2}>
          <Grid container spacing={2}>
            <Grid size={6}>
            <TextField
              id="name"
              label="Name"
              variant="filled"
              name="name"
              fullWidth
              InputProps={{
                disableUnderline: true, // Disable underline
              }}
            
              value={profileData.name}
              onChange={handleChange}
            />
            </Grid>
            <Grid size={6}>
            <TextField
              id="email"
              label="Email"
              name="email"
              variant="filled"
              type="email"
              fullWidth
              InputProps={{
                disableUnderline: true, // Disable underline
              }}
              value={profileData.email}
              onChange={handleChange}
            />
            </Grid>
            <Grid size={6}>
            <TextField
              id="address"
              label="Address"
              variant="filled"
              name="address"
              fullWidth
              InputProps={{
                disableUnderline: true, // Disable underline
              }}
              value={profileData.address}
              onChange={handleChange}
            />
            </Grid>
            <Grid size={12} >
            <TextField
              id="currentPassword"
              label="Current Password"
              name="currentPassword"
              variant="filled"
              type="password"
              fullWidth
              InputProps={{
                disableUnderline: true, // Disable underline
              }}
              sx={{mb: 1}}
              value={profileData.currentPassword}
              onChange={handleChange}
            />
            <TextField
              id="newPassword"
              label="New Password"
              name="newPassword"
              variant="filled"
              type="password"
              fullWidth
              sx={{mb: 1}}
              InputProps={{
                disableUnderline: true, // Disable underline
              }}
              value={profileData.newPassword}
              onChange={handleChange}
            />
            <TextField
              id="confirmNewPassword"
              label="Confirm New Password"
              name="confirmPassword"
              variant="filled"
              type="password"
              error={passwordMatch}
              fullWidth
              InputProps={{
                disableUnderline: true, // Disable underline
              }}
              value={profileData.confirmPassword}
              onChange={handleChange}
            />
            </Grid>
            <Grid size={12} textAlign={'right'}>
            <Button
            //   variant="contained"
              sx={{ textTransform: "capitalize", color:'#000', mr: 3 }}
              
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ textTransform: "capitalize" }}
              type="submit"
              disabled={!profileData.name || !profileData.email || !profileData.currentPassword || !profileData.newPassword || !profileData.confirmPassword || passwordMatch}
            >
              Save Changes
            </Button>
            </Grid>
            </Grid>
          </Stack>
        </FormControl>
        </Box>
    )
}

export default Form
