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
  getColorById(id:number): Observable<ListResponseModel<Color>>{
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl + 'colors/getbyid?id=' + id)
  }

}
