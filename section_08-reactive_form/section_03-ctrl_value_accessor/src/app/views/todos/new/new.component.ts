import {
    Component,
    OnInit,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ColorPickerComponent } from "../../../common/color-picker/color-picker.component";

@Component({
    selector: "todo-new",
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, ColorPickerComponent],
    templateUrl: "./new.component.html",
    styleUrls: ["./new.component.scss"],
})
export class NewComponent implements OnInit {


    public formGroup: FormGroup;
    public currentColor: string;
    public colors = [
        "#ff0000", // red
        "#00ff00", // green
        "#0000ff", // blue
        "#ffff00", // yellow
        "#ff00ff", // magenta
        "#00ffff", // cyan
    ];
    public ctrls = [
        { name: "title" },
        { name: "completed" },
        { name: "color" },
    ];

    constructor() {}

    public ngOnInit(): void {
        this.formMaker(this.ctrls);
    }

    private formMaker(ctrls): void {
        const obj = Object.assign(
            {},
            ...ctrls.map((ctrl) => ({
                [ctrl.name]: new FormControl(),
            }))
        );
        this.formGroup = new FormGroup(obj);
    }
}
