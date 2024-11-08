import Image from "next/image";
//MUI imports
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
//Image
import bannerImage from '@/assests/about-banner.png'

function TopSection() {

    return (
        <>
        <Grid container spacing={2}>
        <Grid size={6} alignContent={'center'}>
            <Typography variant='h4'>
                Our Story
            </Typography>
            <Typography mt={4}>
            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense 
            in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 
            10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
            </Typography>
            <Typography mt={3}>
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse 
            assotment in categories ranging  from consumer.
            </Typography>
        </Grid>
        <Grid size={6}>
            <Image src={bannerImage} alt="banner" style={{width:'-webkit-fill-available', height: '450px'}}/>
        </Grid>
        </Grid>
        </>
    )
}

export default TopSection
