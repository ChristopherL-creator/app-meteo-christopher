import { Component, OnInit } from '@angular/core';
import { GeocodingService } from 'src/app/services/geocoding/geocoding.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  public cityName = ''

  

  constructor(private geoS: GeocodingService) { }

  ngOnInit(): void {
  }

  searchCities(){
    console.log(this.cityName)
  }

}
