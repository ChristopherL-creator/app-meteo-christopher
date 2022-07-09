import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HourlyForecast } from 'src/app/model/weather';
import { MeteoService } from 'src/app/services/meteo/meteo.service';

@Component({
  selector: 'app-meteo-forecast',
  templateUrl: './meteo-forecast.component.html',
  styleUrls: ['./meteo-forecast.component.scss']
})
export class MeteoForecastComponent implements OnInit {
 // creo variabile forecastarray come array vuoto di interfaccie
 // Hourlyforecast, e lo inizializzo come array vuoto, e public
 // perchè sia accessibile al resto della repositioria:
  public forecastArray: HourlyForecast[] = [];

//  infilo metoeservice nel constructor, così da pèoter accedere
//  alle sue funzioni:
  constructor(private meteoS: MeteoService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    if (this.route.snapshot.params['latlng']) {
      const latlng = this.route.snapshot.params['latlng'];
      const lat = latlng.split('@')[0];
      const lng = latlng.split('@')[1];
      this.meteoS.getMeteo(lat, lng).subscribe({
        next: data => this.forecastArray = data,
        error: err => console.log(err)
      })
    }
  }

//  creo funzione per importarmi i dati da getweather in meteo
//  service, che mi resistuirà un observable di hourlyforecast,
//  a cui mi sottoscrivo per qualsiasi cambiamento:
  // getMeteo(){
    // this.meteoS.getMeteo(lat, lng).subscribe({
    //   next: (data) => this.forecastArray = data,
    //   error: err => console.log(err)
    // })
  //   this.meteoS.getMeteo().subscribe({
  //     next: resp => this.forecastArray = resp,
  //     error: err => console.log(err)
  //   })
  // }

}
