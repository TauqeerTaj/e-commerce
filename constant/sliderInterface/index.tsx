import { ReactNode } from "react"

export interface SliderContentList {
    sliderCard: SliderTypes[]
} 

export interface SliderTypes {
    image: unknown
    discount: string
    favouriteIcon?: unknown
    viewIcon?:unknown
    rating?:unknown
    productPrice: string
    productHeading: string
    priceOff: ReactNode
}

export interface SliderCategoryList {
    sliderCategoryCard: SliderCategoryType[]
}

export interface SliderCategoryType {
    image: unknown
    productHeading: string
}