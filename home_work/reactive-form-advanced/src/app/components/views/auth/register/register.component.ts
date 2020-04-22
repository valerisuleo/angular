import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../../common/form-container/form.component';
import formTemplate from './form-template';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends FormComponent implements OnInit {

    constructor() {
        super()
    }

    handleSubmit(isSubmitted: boolean) {
        const { value } = this.formGroup;
        console.log('isSubmitted', isSubmitted, value);
    }

    ngOnInit(): void {
        this.formMaker(formTemplate);
    }
}
