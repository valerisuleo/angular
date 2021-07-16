import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'hideth'
})

export class HideTh implements PipeTransform {

    transform(value: any, obj: any): any {
        if (value === 'action') {
            return '';
        }
        return value;
    }
}