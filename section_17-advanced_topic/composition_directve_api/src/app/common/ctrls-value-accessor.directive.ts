import { Directive, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Directive({
    selector: "[ctrlsValueAccessorDirective]",
    standalone: true,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CtrlsValueAccessorDirective),
            multi: true,
        },
    ],
})
export class CtrlsValueAccessorDirective<T> implements ControlValueAccessor {

    constructor() {}
    private onChange: (value: T) => void;
    private onTouched: () => void;
    private valueProp: T

    writeValue(value: T) {
        this.valueProp = value;
    }

    registerOnChange(onChange: (value: T) => void) {
        this.onChange = onChange;
    }

    registerOnTouched(fn: () => void) {
        this.onTouched = fn;
    }

    updateValue(value: T) {
        console.log('fire', value);
        
        this.valueProp = value;
        if (this.onChange) {
            this.onChange(this.valueProp);
        }
        if (this.onTouched) {
            this.onTouched();
        }
    }
}
