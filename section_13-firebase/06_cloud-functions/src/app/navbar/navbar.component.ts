import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'bootstrap-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    isAuth: boolean;
    user: any;

    constructor(private service: AuthService) { }

    logout(): void {
        this.service.signOut();
    }

    isLoggedIn(): void {
        this.service.isLoggedIn()
            .subscribe((response: boolean) => {
                this.isAuth = response;
            });
    }

    getCurrentUserData() {
        this.service.getAuthState()
            .subscribe((response) => {
                console.log(response);
                this.user = response;
            });
    }

    ngOnInit(): void {
        this.isLoggedIn();
        this.getCurrentUserData();
    }

}
