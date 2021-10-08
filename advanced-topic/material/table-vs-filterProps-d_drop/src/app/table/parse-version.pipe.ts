import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colTitle'
})
export class ParseVersionPipe implements PipeTransform {
    transform(value: string, ...args: any[]): any {
        if (value === 'actions') {
            return '';
        }        
        return value
    }
}
