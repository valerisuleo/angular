import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class CustomPipe implements PipeTransform {

  // when we set the value to 'string' we have access to all the methods available such as 'substring'
  transform(value: string, args?: any): any {
    if(!value) {
      return null;
    } else {
      return value.substring(0, 10) + '...';
    }
  }

}


// export class CustomPipe implements PipeTransform {
//
//   transform(value: any, args?: any): any {
//     return null;
//   }
//
// }
