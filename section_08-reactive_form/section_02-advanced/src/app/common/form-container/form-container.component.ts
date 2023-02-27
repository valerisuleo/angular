import { Component, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
	selector: "bootstrap-form",
	templateUrl: "./form-container.component.html",
	styleUrls: ["./form-container.component.scss"],
})
export class FormContainerComponent {
	@Input() props: FormGroup;

	constructor() {}

	public formMaker(array) {
		const obj = Object.assign(
			{},
			...array.map((item) => ({
				[item.name]: new FormControl("", item.validators),
			}))
		);
		return new FormGroup(obj);
	}
}
