import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'covert'
})
export class CovertPipe implements PipeTransform {

  transform(value: number, ...target) {
    // return null;
    console.log(target[0])
    if(!value) return ""
    console.log(value)
    // return (value / 1.6)

    switch(target[0]){
      case 'miles':
        return (value / 1.6)

      case 'meters':
        return value * 1000

      case 'cm':
          return value * 1000 * 100;
      default:
        return 'Error'
        // throw new Error('Target unit not available')
    }

  }

}
