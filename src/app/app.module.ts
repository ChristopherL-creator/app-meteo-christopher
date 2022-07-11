import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MeteoForecastComponent } from './components/meteo-forecast/meteo-forecast.component';
// import { TemperatureComponent } from './components/temperature/temperature.component';
import { CodeIconPipe } from './components/pipes/code-icon/code-icon.pipe';
// import { AddMeasureUnitPipe } from './components/pipes/add-measure-unit/add-measure-unit.pipe';
// import { SetTwoDecimalsPipe } from './components/pipes/set-two-decimals/set-two-decimals.pipe';
// import { CitiesComponent } from './components/cities/cities.component';
import { FormsModule } from '@angular/forms';
import { CityDetailComponent } from './components/city-detail/city-detail.component';
import { MeteoForecastModule } from './components/temperature/meteo-forecast.module';
import { CitiesModule } from './components/cities/cities.module';

@NgModule({
  declarations: [
    AppComponent,
    MeteoForecastComponent,
    // TemperatureComponent,
    // CodeIconPipe,
    // AddMeasureUnitPipe,
    // SetTwoDecimalsPipe,
    // CitiesComponent,
    CityDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    MeteoForecastModule,
    FormsModule, 
    CitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
