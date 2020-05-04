import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LinkValidators } from './validators';

@Component({
    selector: 'sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

    title = 'Register';
    keys: string[] = [];
    name: string;
    type: string;

    constructor() { }

    formObj = new FormGroup({
        username: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            LinkValidators.urlValidator
        ]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(4),
        ])
    });

    handleSubmit(isSubmmitted: boolean) {
        const { value } = this.formObj;
        
        if (isSubmmitted) {
            console.log("POST payload", value);
            this.formObj.reset()
        }  
    }
 
    getKeys(): void {
        const { value } = this.formObj;
         this.keys = Object.keys(value);
    }

    ngOnInit(): void {
        this.getKeys();
    }

}
