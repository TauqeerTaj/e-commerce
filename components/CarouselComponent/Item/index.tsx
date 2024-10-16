import Image from "next/image";
import { Paper } from "@mui/material";

export default function Item(props: { item: unknown }) {
  return (
    <Paper>
      <Image
        src={props.item as HTMLImageElement}
        alt="carousel-image"
        width={1000}
        height={400}
      />
    </Paper>
  );
}
