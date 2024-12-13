import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
//Interface
import { PeopleInterface } from "@/constant/peopleInterface";
//Components
import PeopleCard from "./PeopleCard";

interface ListPeople {
  peopleList: Array<PeopleInterface>;
}

const People: React.FC<ListPeople> = ({ peopleList }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box p={3}>
      {peopleList.length && (
        <Slider {...settings}>
          {peopleList?.map((people: PeopleInterface) => (
            <div key={people.designation}>
              <PeopleCard cardData={people} />
            </div>
          ))}
        </Slider>
      )}
    </Box>
  );
};

export default People;
