import { Directive, HostListener, ElementRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Directive({
  selector: '[base64]',
})
export class Base64Directive {

  constructor(private element: ElementRef) { }

  @HostListener('change') base64() {
    const vm = this;
    const fileReader = new FileReader();

    const file = (vm.element.nativeElement.files || vm.element.nativeElement.dataTransfer.files)[0];
    fileReader.readAsDataURL(file);

      fileReader.onload = function fileLoaded() {
        console.log(fileReader.result);
    }
  }
}
