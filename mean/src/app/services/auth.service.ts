import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const credentials = {username: username, password: password};
    console.log('attempAuth ::');
    return this.http.post('http://localhost:3000/api/login', credentials);
  }

  // logout() {
  //   localStorage.removeItem('access_token');
  // }

  // public get loggedIn(): boolean {
  //   return (localStorage.getItem('access_token') !== null);
  // }
}
// export class AuthService {
//   constructor(private http: HttpClient) { }
//
//   login(username: string, password: string): Observable<boolean> {
//     return this.http.post<{token: string}>('/api/login', {username: username, password: password})
//       .pipe(
//         map(result => {
//           localStorage.setItem('access_token', result.token);
//           return true;
//         })
//       );
//   }
//
//   logout() {
//     localStorage.removeItem('access_token');
//   }
//
//   public get loggedIn(): boolean {
//     return (localStorage.getItem('access_token') !== null);
//   }
// }
