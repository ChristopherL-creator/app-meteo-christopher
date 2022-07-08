import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/model/city';
import { GeocodingService } from 'src/app/services/geocoding/geocoding.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  public cityName = ''

  public cities : City[] = []


  constructor(private geoS: GeocodingService) { }

  ngOnInit(): void {
  } 

  // getCities(searchString: string){ 
  //   this.geoS.getCities(searchString).subscribe({
  //     next: data => this.cities = data,
  //     error: err => console.log(err)
  //   })
  // }

  searchCities(){
    console.log(this.cityName)
    this.geoS.getLocation(this.cityName)?.subscribe({
      next: response => {
        this.cities = response
        console.log(this.cities)
        },
      error: err => console.log(err)

    })
    
  }

}
