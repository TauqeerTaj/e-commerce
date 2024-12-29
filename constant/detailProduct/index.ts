interface Review {
  text: string;
}

interface Product {
  _id: string;
  discount: string;
  image: string;
  priceOff: string;
  productHeading: string;
  productPrice: string;
  rating: string;
  availability: string;
  description: string;
  colour: string;
  available_colours: string[];
  reviews: Review[];
  detailImages: {
    front: string;
    back: string;
    left: string;
    right: string;
  };
}
export interface DetailProduct {
  product: Product;
  relatedProducts?: Product[];
}
