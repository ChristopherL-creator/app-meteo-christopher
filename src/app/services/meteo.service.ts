
import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { map, Observable, retry } from 'rxjs';
import { HourlyForecast } from '../model/weather';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

//  iniflo url api in variabile private readoly:
  private readonly BASE_URL = "https://api.open-meteo.com/v1/forecast?latitude=41.8955&longitude=12.4823&hourly=temperature_2m,relativehumidity_2m,rain,weathercode,cloudcover,windspeed_10m,winddirection_10m&timezone=Europe%2FBerlin"

// infilo httpclient in constructor, per poter fare chiamate get:
  constructor(private http: HttpClient ) { }

//  funzione per prender dati da api: richiedo datida base_url, li
//  organizzo in base ad array di interfaccie hourlyfoercast, e con
//  pipe li infilo in variabile data. che mappo con parsermeteodata,
// a cui passo lo stesso data
  getWeather() {
    return this.http.get<HourlyForecast[]>(this.BASE_URL).pipe(
      map(data => this.parserMeteoData(data))
      );
    }

//  funzione a cui passo data, con il response della get(i dati dell'api)
  parserMeteoData(data: any){
// loggo data per essere sicuro di avere data:
    console.log(data);
//  creo variabili array in cui infilo i dati corrispendi del data:
    const timeArray = data.hourly.time;
    const codeArray = data.hourly.weathercode;
    const tempArray = data.hourly.temperature_2m;
    const humidityArray =  data.hourly.relativehumidity_2m;
    const rainArray = data.hourly.rain;
    const cloudCoverArray = data.hourly.cloudcover;
    const windSpeedArray = data.hourly.windspeed_10m;
    const windDirectionArray = data.hourly.winddirection_10m

//  inizializzo array vuoto di hourlyforecast in variabile forecastarray
    const forecastArray: HourlyForecast[] = []

//  faccio ciclare uno degli array, siccome hanno tutti lo stesso indice.
//  in modo che ad ogni giro mi dia un nuovo forecast
    for (let i = 0; i < tempArray.length; i++) {
//  temperature corrisponde a ogni indice di temparray:
      const timePerIndex = timeArray[i];
      const codePerIndex = codeArray[i];
      const temperaturePerIndex = tempArray[i];
      const humidityPerIndex = humidityArray[i];
      const rainPerIndex = rainArray[i];
      const cloudCoverPerIndex = cloudCoverArray[i];
      const windSpeedPerIndex = windSpeedArray[i];
      const windDirectionPerIndex = windDirectionArray[i];

//  creo variabile singolo forecast, in cui inizializzo l'interfaccia
//  hourlyforecast: dichiarando di nuovo proprietà, a cui assegno
//  valori da costanti scritte sopra:
      const forecast: HourlyForecast = {
                                        date: timePerIndex,
                                        code: codePerIndex,
                                        temperature: temperaturePerIndex,
                                        humidity: humidityPerIndex,
                                        rain: rainPerIndex,
                                        cloudCover: cloudCoverPerIndex,
                                        windSpeed: windSpeedPerIndex,
                                        windDirection: windDirectionPerIndex
                                      }

//  riempo forecastArray con tutti i forecast:
      forecastArray.push(forecast)
    }
//  ritorno forecastarray
    return forecastArray;

    //  con map:
    // return data.hourly.time.map((time: string, index: number) => {
    //   return {date: time, temperature: data.hourly.temperature_2m[index]}
    // })
  }

}
