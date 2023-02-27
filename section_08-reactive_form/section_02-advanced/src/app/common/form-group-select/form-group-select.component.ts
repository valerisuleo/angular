import { Component, Input } from "@angular/core";

@Component({
	selector: "bootstrap-form-group-select",
	templateUrl: "./form-group-select.component.html",
	styleUrls: ["./form-group-select.component.scss"],
})
export class FormGroupSelectComponent {
	@Input() formGroup: any;
	@Input() label: any;
	@Input() type: any;
	@Input() options: any;
	@Input() name: any;

	constructor() {}

	get select() {        
		return this.formGroup.get(this.name);
	}
}
