import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import { _isNumberValue } from '@angular/cdk/coercion';

@Pipe({
    name: 'dateAndString'
})

export class CustomTablePipe implements PipeTransform {
    transform(value: string, ...args: any[]): any {

        const isDate = new RegExp('^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$');

        if (isDate.test(value)) {
            value = new Date(value).toLocaleDateString();
        } else if (!_isNumberValue(value) && value.length !== 36) {
            value = value.split(/(?=[A-Z])/).join(" ");
            value = _.upperFirst(_.toLower(value));
        }
        return value;
    }
}



