import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent {

  assoForm = new FormGroup({
    // username: new FormControl('', Validators.required),
    username: new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    UsernameValidators.noSpace
  ]),
    password: new FormControl('', Validators.required)
  });

  get myUsername() {
    return this.assoForm.get('username');
  }
}
