import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = "https://localhost:44344/api/";
  constructor(private httpClient: HttpClient) { }
  getColors(): Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl + "colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
  getCarsByColor(colorId: number): Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl + "colors/getbycolor?colorid=" + colorId
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

}
