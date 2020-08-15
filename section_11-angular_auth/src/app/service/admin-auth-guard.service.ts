import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(
        private router: Router,
        private service: AuthService,
    ) { }

    canActivate() {
        const decodeToken = this.service.getCurrentUser();
        const { admin } = decodeToken;

        if (admin) {
            return admin;
        } else {
            this.router.navigate(['/no-access']);
        }
    }
}
