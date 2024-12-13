import Image from "next/image";
//Interface
import { PeopleInterface } from "@/constant/peopleInterface";
import { Box } from "@mui/material";

interface CardInterface {
  cardData: PeopleInterface;
}

const PeopleCard: React.FC<CardInterface> = ({ cardData }) => {
  return (
    <Box component="div" className="peopleCard" sx={{ padding: 2 }}>
      <Box
        component="div"
        sx={{ backgroundColor: "#f5f5f5", textAlign: "center", paddingTop: 2 }}
      >
        <Image
          src={cardData?.image}
          alt="person"
          width={0}
          height={0}
          style={{ width: "auto", height: "auto", margin: "auto" }}
        />
      </Box>
      <Box component="div" sx={{ fontWeight: "bold", fontSize: 18, mt: 3 }}>
        {cardData.name}
      </Box>
      <Box component="div" sx={{ fontSize: 12 }}>
        {cardData.designation}
      </Box>
      <Box component="div">
        {cardData?.social?.map((item) => (
          <Box
            component="span"
            key={item.link}
            sx={{
              display: "inline-block",
              marginRight: 2,
              mt: 1,
              cursor: "pointer",
            }}
          >
            <Image
              src={item.image}
              alt="social-icon"
              width={0}
              height={0}
              style={{ width: "auto", height: "auto" }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PeopleCard;
