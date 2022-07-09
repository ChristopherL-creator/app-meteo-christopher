import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/model/city';
import { GeocodingService } from 'src/app/services/geocoding/geocoding.service';
import { MeteoService } from 'src/app/services/meteo/meteo.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss']
})
export class CityDetailComponent implements OnInit {

  public selectedCities ?: City;

  constructor(private route:ActivatedRoute, private geoS: GeocodingService, private meteoS: MeteoService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
  }

}
