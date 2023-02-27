import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class AuthService {

    tokenKey = 'jwt';

    constructor(private httpClient: HttpClient) { }

    saveData(key, value) {
        localStorage.setItem(key, value);
    }

    login(credentials): Observable<any> {
        return this.httpClient.post(`http://localhost:4000/login`, credentials)
            .pipe(map((response: any) => {
                const data = response;

                if (data && data.token) {
                    localStorage.setItem('token', data.token);
                }
                return data;
            }));
    }

    isLoggedIn() {
        const token = localStorage.getItem('token') ? true : false;
        return token;
    }


    getJwt() {
        return localStorage.getItem('token');
    }


}

