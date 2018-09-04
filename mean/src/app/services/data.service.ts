import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    })

  constructor(private url: string,  private http: Http) {}

  getAll() {
    return this.http.get(this.url, { headers: this.headers })
    .map(response => response.json());
  }

  get(id) {
    return this.http.get(this.url + `/${id}`, { headers: this.headers })
    .map(response => response.json());
  }

  sendFilters(id) {
    return this.http.get(this.url + `/${id}`, { headers: this.headers })
    .map(response => response.json());
  }
}
