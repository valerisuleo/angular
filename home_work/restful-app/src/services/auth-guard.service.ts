import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private service: AuthService, private router: Router) { }

    canActivate(route, state: RouterStateSnapshot) {
        const isLoggedIn = this.service.isLoggedIn();

        if (isLoggedIn) {
            return true;
        } else {
            this.router.navigate(['/login'])
            return false;
        }
    }
}

