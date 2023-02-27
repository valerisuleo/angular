import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormContainerComponent } from "src/app/common/form-container/form-container.component";
import formAPI from "./mock";

@Component({
	selector: "home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent extends FormContainerComponent implements OnInit {
	public formData;
	public formGroup: FormGroup;

	constructor() {
		super();
	}

	ngOnInit(): void {
		//fetch data from api
		this.formData = formAPI;
		this.formGroup = this.formMaker(formAPI);
	}

	submit() {
        console.log(this.formGroup);
        
    }
}
