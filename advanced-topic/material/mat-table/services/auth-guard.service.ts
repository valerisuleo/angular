import { Injectable } from '@angular/core';
import { Router, CanLoad, CanActivate, Resolve, Route, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { LocalStoreManager } from './localstorage.service';
import { LocalKeys } from './localstorageconstants';
import * as _ from 'lodash';

@Injectable()
export class AuthGuard implements CanLoad, Resolve<boolean> {

  currentUser: any;

  constructor(private authService: AuthService, private router: Router, private storageManager: LocalStoreManager) {
    this.currentUser = this.storageManager.getData(LocalKeys.CURRENT_USER);
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    //check if user is logged in or not
    if (this.authService.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['signin']);
      return false;
    }
  }

  resolve(): boolean{
    //if user loggedin, redirect to accounts
    if (this.authService.isLoggedIn) {
      this.authService.navigateUser();
      return false;
    } else {
      return true;
    }
  }

}
