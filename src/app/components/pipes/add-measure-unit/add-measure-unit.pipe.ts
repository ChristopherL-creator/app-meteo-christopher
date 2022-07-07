import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addMeasureUnit'
})
export class AddMeasureUnitPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
