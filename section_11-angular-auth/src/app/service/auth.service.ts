import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class AuthService {

    public navbarRefresh$ = new Subject();
    public isRefreshed: boolean = false;

    constructor(private http: Http, private router: Router) { }

    register(newUser): Observable<any> {
        return this.http.post(`${environment.servicesHost}/register`, newUser)
            .pipe(map(response => response.json()));
    }

    login(credentials): Observable<any> {
        return this.http.post(`${environment.servicesHost}/login`, credentials)
            .pipe(map((response) => {
                const data = response.json();

                if (data && data.token) {
                    localStorage.setItem('token', data.token);
                    this.navbarRefresh$.next(this.isRefreshed = true);
                }
                return data;
            }));
    }

    logout(): void {
        localStorage.removeItem('token');
        this.navbarRefresh$.next(this.isRefreshed = true);
        this.router.navigate(['/login']);
    }

    isLoggedIn():boolean {
        return tokenNotExpired();
    }

    getCurrentUser(): any {
        let jwtHelper = new JwtHelper();
        const token = localStorage.getItem('token');
        const decodeToken = !token ? null : jwtHelper.decodeToken(token);
        return decodeToken;
    }
}

