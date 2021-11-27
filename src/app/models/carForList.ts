import { CarImage } from "./carImage";

export interface CarForList{
    carId:number
    brandName:string
    colorName:string
    description:string
    dailyPrice:string
    modelYear:number
    imagePath:string
    mainImage:CarImage
}