import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  BASE_URL =  'https://geocoding-api.open-meteo.com/v1/search?name='

  constructor() { }


}
