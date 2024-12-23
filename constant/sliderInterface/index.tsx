import { ReactNode } from "react";

export interface SliderContentList {
  setting: {
    arrows: boolean;
    button: string;
    rows: string;
  };
  sliderCard: SliderTypes[];
}

export interface SliderTypes {
  _id: string;
  image: unknown;
  discount: string;
  favouriteIcon?: unknown;
  viewIcon?: unknown;
  rating?: unknown;
  productPrice: string;
  productHeading: string;
  priceOff: ReactNode;
}

export interface SliderCategoryList {
  sliderCategoryCard: SliderCategoryType[];
}

export interface SliderCategoryType {
  image: unknown;
  productHeading: string;
}
