import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setTwoDecimals'
})
export class SetTwoDecimalsPipe implements PipeTransform {

  transform(value: number): string {
    return Number.parseFloat(value.toString()).toFixed(2); 
  }

}
