import Grid from "@mui/material/Grid2";
import ProfileComponent from "@/components/Profile"
import {Box} from "@mui/material";
import Sidebar from "@/components/Profile/sidebar";
import Form from "@/components/Profile/form"

const Profile: React.FC = () => {

    return (
        <>
        <ProfileComponent/>
        <Grid container spacing={2} px={3} mb={10}>
        <Grid size={3}>
            <Sidebar/>
        </Grid>
        <Grid size={9}>
            <Form/>
        </Grid>
        </Grid>
        </>
    )
}

export default Profile
