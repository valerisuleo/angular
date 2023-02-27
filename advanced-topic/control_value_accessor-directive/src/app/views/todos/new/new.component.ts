import {
    Component,
    CUSTOM_ELEMENTS_SCHEMA,
    OnInit,
    ViewChild,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ColorPickerComponent } from "../../../common/color-picker/color-picker.component";
import { CtrlsValueAccessorDirective } from "../../../common/ctrls-value-accessor.directive";

@Component({
    selector: "todo-new",
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ColorPickerComponent,
        CtrlsValueAccessorDirective,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: "./new.component.html",
    styleUrls: ["./new.component.scss"],
})
export class NewComponent implements OnInit {
    @ViewChild(CtrlsValueAccessorDirective)
    private child: CtrlsValueAccessorDirective<any>;

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

    public handleClick(color): void {
        this.currentColor = color;
        this.child.updateValue(color);
    }

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
