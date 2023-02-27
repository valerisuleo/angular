import {
    Component,
    EventEmitter,
    Input,
    Output,
} from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: "color-picker",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./color-picker.component.html",
    styleUrls: ["./color-picker.component.scss"],
})
export class ColorPickerComponent {
    @Input() colors: string[];
    @Output("handleClick") click = new EventEmitter();

    getCurrent(color: string) {
        this.click.emit(color);
    }
}
