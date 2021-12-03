import { CarImage } from "./carImage";

export interface CarDetailDto{
    carId:number
    carName:string
    brandName:string
    colorName:string
    description:string
    dailyPrice:number
    modelYear:number
    imagePath:string
    mainImage:CarImage
}