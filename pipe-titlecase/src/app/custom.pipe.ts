import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string): any {
    if(!value) return null;

    let words = value.split(' ');
    // console.log(words);

    let prepositions = ['of','the'];

    for(let i=0; i < words.length; i++) {
      if (i > 0 && prepositions.includes(words[i].toLowerCase())) {
      words[i] = words[i].toLowerCase();
      } else {
      words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1).toLowerCase();
      }
    }
    return words.join(' ');
  }
}
