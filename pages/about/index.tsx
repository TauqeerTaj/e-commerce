import { Box } from "@mui/material";
import { GetStaticProps } from "next";
import axios from "axios";
//Components
import TopSection from "@/components/about/TopSection";
import BreadCrumbs from "@/components/common/breadCrumb";
import ServiceComponent from "@/components/common/ServiceComponent";
import People from "@/components/People";
//Interface
import { ServiceData } from "@/constant/servicesInterface";
import { PeopleInterface } from "@/constant/peopleInterface";

interface PropsInterface {
  services: ServiceData[];
  people: PeopleInterface[];
  commonServices: ServiceData[];
}

const About: React.FC<PropsInterface> = ({
  services,
  people,
  commonServices,
}) => {
  return (
    <Box px={3} mt={4}>
      <BreadCrumbs
        navigation={[
          {
            step: "Home",
            path: "/home",
          },
          {
            step: "About",
            path: "/about",
          },
        ]}
      />
      <Box mt={4}>
        <TopSection />
      </Box>
      {/* Service Section */}
      <Box mt={4}>
        <ServiceComponent services={services} border={true} />
      </Box>
      {/* People Section */}
      <Box mt={4}>
        <People peopleList={people} />
      </Box>
      {/* Service Section */}
      <Box mt={4}>
        <ServiceComponent services={commonServices} border={false} />
      </Box>
    </Box>
  );
};

export const getStaticProps: GetStaticProps<PropsInterface> = async () => {
  try {
    const servicesResponse = await axios.get(
      "http://localhost:3000/aboutServices.json"
    );
    const peopleResponse = await axios.get("http://localhost:3000/people.json");
    const commonServices = await axios.get(
      "http://localhost:3000/services.json"
    );
    return {
      props: {
        services: servicesResponse.data,
        people: peopleResponse.data,
        commonServices: commonServices.data,
      },
    };
  } catch (error) {
    console.error("Error fetching services data:", error);

    return {
      props: {
        services: [],
        people: [],
        commonServices: [],
      },
    };
  }
};

export default About;
