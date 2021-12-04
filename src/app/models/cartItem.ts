import { Car } from "./car";
import { CarDetailDto } from "./carDetailDto";

export class CartItem{
    car:Car;
    carDetailDto:CarDetailDto;
    quantity:number;
}