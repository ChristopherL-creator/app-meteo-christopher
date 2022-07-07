import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codeIcon'
})
export class CodeIconPipe implements PipeTransform {

//  creo pipe per assegnare a ciscun weathercode le relativa immagine
  transform(value: number, ...args: unknown[]): any {
    switch (value) {
      case 0:
        return './src/assets/clear.svg'
      case 1:
      case 2:
      case 3:
        return './src/assets/cloud.svg'
      case 45:
      case 48:
        return './src/assets/fog.svg'
      default: './src/assets/clear.svg'
        break;
    }
  }

}
