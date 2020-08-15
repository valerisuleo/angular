import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../common/form/form.component';
import { AuthService } from '../../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import formTemplate from './form-template';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormComponent implements OnInit {

    constructor(
        public service: AuthService,
        private route : ActivatedRoute,
        private router: Router
    ) {
        super()
    }

    handleSubmit(isSubmitted: boolean) {
        const { value } = this.formGroup;

        if (isSubmitted) {
            this.service.login(value)
            .subscribe((response) => {
                const { statusCode } = response;
                if (statusCode === 200) {
                    const returnUrl =  this.route.snapshot.queryParamMap.get('returnUrl');
                    this.router.navigate([ returnUrl || '/movies']);
                }
            });
        }
    }

    ngOnInit(): void {
        this.formMaker(formTemplate);
    }

}
