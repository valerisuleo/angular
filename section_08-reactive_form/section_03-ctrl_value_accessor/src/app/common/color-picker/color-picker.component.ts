import { Component, forwardRef, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: "color-picker",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./color-picker.component.html",
    styleUrls: ["./color-picker.component.scss"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ColorPickerComponent),
            multi: true,
        },
    ],
})
export class ColorPickerComponent implements ControlValueAccessor {
    @Input() colors: string[];
    private onChange: (value: string) => void;
    private onTouched: () => void;
    private value: string;

    writeValue(value: string) {
        this.value = value;
    }

    registerOnChange(onChange: (value: string) => void) {
        this.onChange = onChange;
    }

    registerOnTouched(fn: () => void) {
        this.onTouched = fn;
    }
    getCurrent(color: string) {
        this.value = color;
        if (this.onChange) {
            this.onChange(color);
        }
        if (this.onTouched) {
            this.onTouched();
        }
    }
}
