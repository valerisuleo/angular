import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(items: any[], query: string): any[] {
    if (!query) {
      // check if the input filed is clear
      return items;
    }
    // otherwise return updated coffe list array
    return items.filter(function(el: any){
      return JSON.stringify(el).toLowerCase().includes(query.toLowerCase());
    })
  }
}


// transform is a method and it takes 2 args:
 // 1. items (I named it 'items' but could be anything)
 // 2. query is the name of the [(ngModel)] to hooked up our input field
