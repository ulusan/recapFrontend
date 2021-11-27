import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarForList } from '../models/carForList';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44344/api/";

  constructor(private httpClient: HttpClient) { }

  //Tüm Ürünleri Getirir
  getCars(): Observable<ListResponseModel<CarForList>> {
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarForList>>(newPath);
  }
  getCarsByBrand(brandId: number): Observable<ListResponseModel<CarForList>> {
    let newPath = this.apiUrl + "cars/getbybrand?brandid=" + brandId
    return this.httpClient.get<ListResponseModel<CarForList>>(newPath);
  }
  getCarsByColor(colorId: number): Observable<ListResponseModel<CarForList>> {
    let newPath = this.apiUrl + "cars/getbycolor?colorid=" + colorId
    return this.httpClient.get<ListResponseModel<CarForList>>(newPath);
  }

}