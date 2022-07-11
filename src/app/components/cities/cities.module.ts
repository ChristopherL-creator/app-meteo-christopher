import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './cities.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [ 
    CitiesComponent
  ],
  imports: [
    CommonModule, 
    AppRoutingModule
  ], 
  exports: [ 
    CitiesComponent
  ]
})
export class CitiesModule { }
