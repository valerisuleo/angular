import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('format') format;

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    let asso: string = this.el.nativeElement.value;
    // asso = asso.toLowerCase();
    if (this.format === 'uppercase') {
        asso = asso.toUpperCase();
    } else {
      asso = asso.toLowerCase();
    }
    console.log(asso);
  }
}

// export class InputFormatDirective {
//
//   @HostListener('focus') onFocus() {
//     console.log('focus');
//   }
//
//   @HostListener('blur') onBlur() {
//     console.log('blur');
//   }
//
//   constructor() { }
//
// }
