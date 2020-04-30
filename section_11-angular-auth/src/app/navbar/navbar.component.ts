import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
    selector: 'bootstrap-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    links: any[] = [];

    constructor(private service: AuthService) { }

    renderNav() {
        let isDispay;
        const routes = ['movies', 'admin', 'register', 'login', 'queryparams'];

         this.links = routes.map((item, i) => {
            if (item === 'movies') {
                isDispay = this.isLoggedIn();
            } else if (item === 'admin') {
                isDispay = (this.isLoggedIn() && this.isAdmin());
            } else if (item === 'login') {
                isDispay = !this.isLoggedIn();
            } else {
                isDispay = true
            }
            return {
                link: `/${item}`,
                label: item,
                display: isDispay
            }
        });
    }

    logout(): void {
        this.service.logout();
    }

    isLoggedIn(): boolean {
        const isTokenExpired = this.service.isLoggedIn();
        return isTokenExpired;
    }

    isAdmin(): boolean {
        const decodeToken = this.service.getCurrentUser();
        const { admin } = decodeToken;
        return admin;
    }

    refreshNavbarAfterLogin(): void {
        this.service.navbarRefresh$
        .subscribe((data) => {
            if (data) {
                this.renderNav();
            }
        });
    }


    ngOnInit(): void {
        this.refreshNavbarAfterLogin();
        this.renderNav();
    }

}
