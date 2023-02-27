import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CtrlsValueAccessorDirective } from "../ctrls-value-accessor.directive";

@Component({
    selector: "color-picker",
    standalone: true,
    hostDirectives: [CtrlsValueAccessorDirective],
    imports: [CommonModule],
    templateUrl: "./color-picker.component.html",
    styleUrls: ["./color-picker.component.scss"],
})
export class ColorPickerComponent {
    @Input() colors: string[];

    constructor(private cva: CtrlsValueAccessorDirective<any>) {}

    getCurrent(color: string) {
        this.cva.updateValue(color);
    }
}
