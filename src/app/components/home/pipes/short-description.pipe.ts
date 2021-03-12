import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescription'
})
export class ShortDescriptionPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let description = ''
    if(value.length < 130) {
      for (let i = 0; i < value.length; i++) {
        description += value[i] 
      }
      return description;
    } else {
      for (let i = 0; i < 130; i++) {
        description += value[i] 
      }
      return description + '...';
    }
    
  }

}
