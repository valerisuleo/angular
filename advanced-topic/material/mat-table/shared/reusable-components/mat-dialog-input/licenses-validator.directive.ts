import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, ValidatorFn, FormControl } from '@angular/forms';

@Directive({
    selector: '[licensesValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useClass: LicensesValidatorDirective,
            multi: true
        }
    ]
})

export class LicensesValidatorDirective implements Validator {

    public validator: ValidatorFn;

    constructor() {
        this.validator = this.licenseValidator();
    }

    public validate(c: FormControl) {
        return this.validator(c);
    }

    private getFromLS(key: string): any {
        return JSON.parse(localStorage.getItem(key));
    }

    public licenseValidator(): ValidatorFn {
        return (control: FormControl) => {
            const valuePrev = this.getFromLS('account');
            const currentInput = this.getFromLS('currentInput');

            if (control.value != null && control.value !== '' && currentInput === 'numberOfLicenses') {
                let isValid: boolean = control.value >= valuePrev.assignedLicenses;
                if (isValid) {
                    return null;
                } else {
                    return {
                        licensevalidator: { valid: false }
                    };
                }
            } else {
                return null;
            }
        };
    }
}
