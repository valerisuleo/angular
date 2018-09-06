import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{token: string}>('http://127.0.0.1:8180/DocCRMH3G/login', {username: username, password: password})
    // return this.http.post<{token: string}>('/api/login', {username: username, password: password})
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          console.log('result.token', result.token);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}
