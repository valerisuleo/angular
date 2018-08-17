import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private url: string,  private http: Http) {}

  getAll() {
    return this.http.get(this.url);
  }

  get(id) {
    return this.http.get(this.url + '/' + id);
  }
}
