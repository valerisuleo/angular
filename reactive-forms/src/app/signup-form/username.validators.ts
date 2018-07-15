import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  static noSpace(control: AbstractControl): ValidationErrors|null {
    if((control.value as string).indexOf(' ') >= 0) {
      return { noSpace: true }
    } else {
      return null;
    }
  }
  // static uniqueUsername(control: AbstractControl): ValidationErrors| null {
  static uniqueUsername(control: AbstractControl) : Promise<ValidationErrors| null> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (control.value === 'valerio') {
            resolve ({ uniqueUsername: true });
            // return { uniqueUsername: true }
        } else {
          resolve (null);
          // return null;
        }
      }, 4000)
    })
  }
}
