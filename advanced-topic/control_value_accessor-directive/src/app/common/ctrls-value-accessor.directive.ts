import { Directive, forwardRef, Input } from "@angular/core";
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
    @Input() value: T;

    constructor() {}
    private onChange: (value: T) => void;
    private onTouched: () => void;

    writeValue(value: T) {
        this.value = value;
    }

    registerOnChange(onChange: (value: T) => void) {
        this.onChange = onChange;
    }

    registerOnTouched(fn: () => void) {
        this.onTouched = fn;
    }

    updateValue(value: T) {
        this.value = value;
        if (this.onChange) {
            this.onChange(this.value);
        }
        if (this.onTouched) {
            this.onTouched();
        }
    }
}
