import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "bootstrap-form-group-checkbox",
	templateUrl: "./form-group-checkbox.component.html",
	styleUrls: ["./form-group-checkbox.component.scss"],
})
export class FormGroupCheckboxComponent {
	@Input() type: any;
	@Input() label: any;
	@Input() formGroup: FormGroup;
	@Input() name: any;

	constructor() {}

    get input() {         
		return this.formGroup.get(this.name);
	}

    
}
