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
  ], UsernameValidators.uniqueUsername),
    password: new FormControl('', Validators.required)
  });

// In a real app. here we call the server to see if the password and username are valid
  // login() {
  //   let isValid = authService.login(this.form.value);
  //   if (!isValid) {
  //     this.assoForm.setErrors({
  //       invalidLogin: true
  //     });
  //   }
  // }


// basically we are gonna have this error no matter what.
  login() {
    this.assoForm.setErrors({
      invalidLogin: true
    });
  }

  get myUsername() {
    return this.assoForm.get('username');
  }
}
