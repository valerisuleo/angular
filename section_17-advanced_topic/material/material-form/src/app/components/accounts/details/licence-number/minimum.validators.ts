import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {

    static isHigher(label: string, assignedLicense?: any): any {
        return function (control: AbstractControl): ValidationErrors | null {
            if (control.value != null && control.value !== '' && control.value < assignedLicense) {
                return {
                    isHigher: {
                        message: `${label} cannot be less than ${assignedLicense}`
                    }
                }
            } else {
                return null;
            }
        }
    }

    static isTooManyDigits(label: string, assignedLicense?: any): any {
        return function (control: AbstractControl): ValidationErrors | null {
            if (control.value != null && control.value !== '' && control.value > 999999) {
                return {
                    isTooManyDigits: {
                        message: `${label} cannot be more than 999999`
                    }
                }
            } else {
                return null;
            }
        }
    }
}