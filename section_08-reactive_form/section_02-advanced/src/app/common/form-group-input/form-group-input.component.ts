import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "bootstrap-form-group-input",
	templateUrl: "./form-group-input.component.html",
	styleUrls: ["./form-group-input.component.scss"],
})
export class FormGroupInputComponent {
	@Input() name: any;
	@Input() label: any;
	@Input() type: any;
	@Input() formGroup: FormGroup;
	constructor() {}

	get input() {        
		return this.formGroup.get(this.name);
	}
}
