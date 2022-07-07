import { Component, Input, OnInit } from '@angular/core';
import { HourlyForecast } from 'src/app/model/weather';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {

//  dichiaro input selectedtemeprature, di tipo hourlyforecast,
//  così che possa usarlo per creare card in html
  @Input() selectedTemperature?: HourlyForecast;

  constructor() { }

  ngOnInit(): void {
  }

}
