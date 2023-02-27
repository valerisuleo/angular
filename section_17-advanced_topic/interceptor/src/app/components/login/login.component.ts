import { Component, OnInit } from '@angular/core';
import { ILogin } from './interface';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    formModel = {} as ILogin;

    constructor(private service: AuthService) { }

    onSubmit() {
        this.service.login(this.formModel)
        .subscribe((data) => {
            console.log(data);
        });
    }

    ngOnInit(): void {
    }

}
