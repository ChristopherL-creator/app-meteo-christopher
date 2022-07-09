import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './components/cities/cities.component';
import { CityDetailComponent } from './components/city-detail/city-detail.component';
import { MeteoForecastComponent } from './components/meteo-forecast/meteo-forecast.component';

const routes: Routes = [
  {path: 'search', component: CitiesComponent},
  {path: 'meteo/:latlng', component: MeteoForecastComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {path: '**', redirectTo:'/search'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
