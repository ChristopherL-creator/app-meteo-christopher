import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  BASE_URL =  'https://geocoding-api.open-meteo.com/v1/search?name=';

  constructor(private http: HttpClient) { }

//  funzione per costruire api url della città che cerco: prende
//  searchstring da input, e lo aggiunge a base url;
getCities(searchString: string) {

  const url = this.BASE_URL + searchString;

  //  fa chiamata get per prendere dati città da quell'url, e trqmite
  // pipe li inserisce in array data:
  return this.http.get<any>(url).pipe(
    map(data => data.results)
  )
}


}
