import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../common/form/form.component';
import formTemplate from './form-template';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends FormComponent implements OnInit {

    constructor(public service: AuthService, private router: Router) {
        super()
    }

    handleSubmit(isSubmitted: boolean) {
        const { value } = this.formGroup;
        if (isSubmitted) {
            this.service.register(value)
            .subscribe((response) => {
                const { statusCode } = response;
                if (statusCode === 201) {
                    this.router.navigate(['/login'])
                }
            });
        }
    }

    ngOnInit(): void {
        this.formMaker(formTemplate);
    }

}
