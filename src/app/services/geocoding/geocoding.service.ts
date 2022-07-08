import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { City } from 'src/app/model/city';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  
  BASE_URL =  'https://geocoding-api.open-meteo.com/v1/search?name='

  constructor(private http: HttpClient) { }

  getLocation(city: string) {
    if(city === '') return null
    
    const url = this.BASE_URL  + city
    return this.http.get<any>(url).pipe(
      map(data => data.results)
    )
  }


}
