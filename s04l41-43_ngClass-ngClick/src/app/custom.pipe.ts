import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform{
  transform(value: any, args?: any) {
    if (!value) {
        return null;
    } else {
      return value.substr(0, 50) + '...';
    }
  }
}


@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform{
  transform(value: string, args?: any) {
    if (!value) {
        return null;
    } else {
      return value.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
  }
}
