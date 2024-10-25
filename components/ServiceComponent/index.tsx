import Image from "next/image";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
//Images
import DeliveryImg from '@/assests/icon-delivery.png'
import CustomerService from '@/assests/Icon-Customer service.png'
import Secure from '@/assests/Icon-secure.png'
//Styles
import Styles from "@/styles/serviceSection.module.css"


const ServiceComponent:React.FC = () => {

    return (
        <Box className={Styles.serviceSection}>
            <Grid container spacing={2}>
                <Grid size={{xs: 12, sm: 12, md: 4, lg: 4, xl: 4}} textAlign='center'>
                    <Image src={DeliveryImg} alt="deliver-icon"/>
                    <Typography variant="h6">FREE AND FAST DELIVERY</Typography>
                    <Typography >Free delivery for all orders over $140</Typography>
                </Grid>
                <Grid size={{xs: 12, sm: 12, md: 4, lg: 4, xl: 4}} textAlign='center'>
                    <Image src={CustomerService} alt="deliver-icon"/>
                    <Typography variant="h6">24/7 CUSTOMER SERVICE</Typography>
                    <Typography >Friendly 24/7 customer support</Typography>
                </Grid>
                <Grid size={{xs: 12, sm: 12, md: 4, lg: 4, xl: 4}} textAlign='center'>
                    <Image src={Secure} alt="deliver-icon"/>
                    <Typography variant="h6">MONEY BACK GUARANTEE</Typography>
                    <Typography >We reurn money within 30 days</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ServiceComponent
