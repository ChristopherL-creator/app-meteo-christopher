import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codeIcon'
})
export class CodeIconPipe implements PipeTransform {

//  creo pipe per assegnare a ciscun weathercode le relativa immagine
  transform(value: number, ...args: unknown[]): any {
    switch (value) {
      case 0:
        return '/assets/clear.svg'
      case 1:
      case 2:
      case 3:
        return '/assets/cloud.svg'
      case 45:
      case 48:
        return '/assets/fog.svg'
      case 51:
      case 53:
      case 55:
        return '/assets/drizzle.svg'
      case 56:
      case 57:
        return '/assets/drizzle.svg' //frezzing drizzle
      case 61:
      case 63:
      case 65:
        return '/assets/rain.svg' 
      case 66:
      case 67:
        return '/assets/rain.svg' //frezzing drizzle
      case 71:
      case 73:
      case 75:
        return '/assets/snow-fall.svg'
      case 80:
      case 81:
      case 82:
        return 'assets/rain.svg' //shower rain
      case 85:
      case 86:
        return '/assets/snow-fall.svg'
      case 95:
        return '/assets/thunderstorm.svg'
      case 96:
      case 99:
        return '/assets/thunderstorm.svg'
      default: 
        return '/assets/clear.svg'
    }
  }

}
