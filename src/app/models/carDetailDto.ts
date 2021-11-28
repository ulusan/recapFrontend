import { CarImage } from "./carImage";

export interface CarDetailDto{
    carId:number
    carName:string
    brandName:string
    colorName:string
    description:string
    dailyPrice:string
    modelYear:number
    imagePath:string
    mainImage:CarImage
}