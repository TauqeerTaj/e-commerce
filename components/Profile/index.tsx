import {Box, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
//Components
import BreadCrumbs from "../common/breadCrumb"

const ProfileComponent: React.FC = () =>  {

    return (
        <>
        <Box>
            <Grid container spacing={2} px={3}>
                <Grid size={6} py={5}>
                    <BreadCrumbs navigation={[
                    {
                        step: 'Home',
                        path: '/home'
                    },
                    {
                        step: 'My Account',
                        path: '/profile'
                    },
                    ]} />
                </Grid>
                <Grid size={6} py={5} display={"flex"} justifyContent={"end"} alignItems={"center"}>
                    welcome <Typography color="#DB4444">Tauqeer!</Typography>
                </Grid>
            </Grid>
        </Box>
        </>
    )
}

export default ProfileComponent
