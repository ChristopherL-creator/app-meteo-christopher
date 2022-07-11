import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMeasureUnitPipe } from '../pipes/add-measure-unit/add-measure-unit.pipe';
import { SetTwoDecimalsPipe } from '../pipes/set-two-decimals/set-two-decimals.pipe';
import { TemperatureComponent } from './temperature.component';
import { CodeIconPipe } from '../pipes/code-icon/code-icon.pipe';




@NgModule({
  declarations: [ 
    TemperatureComponent, 
    AddMeasureUnitPipe, 
    SetTwoDecimalsPipe, 
    CodeIconPipe
  ],
  imports: [  
    CommonModule
  ], 
  exports: [TemperatureComponent]
})
export class MeteoForecastModule { }
