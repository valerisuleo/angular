import { AbstractControl, ValidationErrors } from '@angular/forms';

export class LinkValidators {
    // In order to access this method from outside without creating an instance of this UsernameValidators class, we decorate this method with 'static'
    static urlValidator(control: AbstractControl): ValidationErrors | null {
        
        const str = (control.value as string); 
        const regexp = new RegExp('^(https?:\\/\\/)?'+ 
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); 
        
        if (!regexp.test(str)) {
            return { urlValidator: true};
        } else {
            return null;
        }
     }
}



