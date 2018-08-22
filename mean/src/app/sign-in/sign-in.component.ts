import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  public username: string;
  public password: string;
  public error: string;

  constructor(private auth: AuthService, private router: Router) { }

  public submit() {
    const vm = this;

    vm.auth.login(vm.username, vm.password)
    .pipe(first())
    .subscribe(
      result => vm.router.navigate(['/home']),
      err => vm.error = 'Could not authenticate'
    );
    console.log('vm', vm);
  }

}
