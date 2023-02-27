import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
    name: 'splitOnUppecase'
})

export class SplitOnUppecasePipe implements PipeTransform {
    transform(value: string, ...args: any[]): any { 
        
        if (value === 'accountId') {
            const split: string[] = value.split(/(?=[A-Z])/);
            const account: string = _.startCase(_.toLower(split[0]));
            const id: string = split[1].toUpperCase();
            value = `${account} ${id}`;
        } else {
            value = value.split(/(?=[A-Z])/).join(" ");
            value = _.upperFirst(_.toLower(value));
        }
        return value;
    }
}