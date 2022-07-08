import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addMeasureUnit'
})
export class AddMeasureUnitPipe implements PipeTransform {

//  per il value mi sono riferito ai valore in temperaturecomponent.html,
//  l'extension è l'unità di misura che andrò ad aggiungere:
  transform(value: any, unit: string): string {
    return value + unit;
  }
  
}
