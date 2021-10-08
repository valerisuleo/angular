import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})

export class FilterPipe implements PipeTransform {

    transform(items: any[], query: string): any[] {
        if (!query) {
            return items;
        }
        return items.filter(function (el: any) {
            return JSON.stringify(el).toLowerCase().includes(query.toLowerCase());
        })
    }
}