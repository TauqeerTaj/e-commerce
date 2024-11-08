import {Box, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useSession } from "next-auth/react";
//Components
import BreadCrumbs from "../common/breadCrumb"

const ProfileComponent: React.FC = () =>  {
    
    const {data: session} = useSession()

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
                    welcome!<Typography color="#DB4444" ml={1}>{session?.user?.name}!</Typography>
                </Grid>
            </Grid>
        </Box>
        </>
    )
}

export default ProfileComponent
