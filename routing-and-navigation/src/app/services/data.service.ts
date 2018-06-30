import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class DataService {

  constructor(private url: string,  private http: Http) {}

  getAll() {
    return this.http.get(this.url)
    .map(response => response.json())
    .toPromise();
  }

  get(id) {
    // return this.http.get(this.url + '/' + id);
    return this.http.get(this.url + `/${id}`)
    .map(response => response.json());
  }
}
