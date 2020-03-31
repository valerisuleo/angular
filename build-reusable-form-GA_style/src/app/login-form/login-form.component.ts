import { Component, OnInit } from '@angular/core';
import { FormClass } from './form';
import { ICredentials } from '../common/interfaces';

@Component({
    selector: 'login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
    
    title = 'Login';
    credentials = [
        {
            type: 'emai',
            name: 'email',
            label: 'Email'
        },
        {
            type: 'password',
            name: 'password',
            label: 'Password'
        }
    ];

    constructor(private formModel: FormClass) { }

    objModel = this.formModel;

    onFormSubmitted(obj: ICredentials) {
        console.log('Fire POST req', obj);
    }

    ngOnInit(): void {

    }

}
