import { Box } from "@mui/material"
//Components
import TopSection from "@/components/about/TopSection"
import BreadCrumbs from "@/components/common/breadCrumb"

function About() {

    return (
        <Box px={3} mt={4}>
        <BreadCrumbs navigation={[
                    {
                        step: 'Home',
                        path: '/home'
                    },
                    {
                        step: 'About',
                        path: '/about'
                    },
                    ]} />
        <Box mt={4}>
            <TopSection/>
        </Box>
        </Box>
        
    )
}

export default About
