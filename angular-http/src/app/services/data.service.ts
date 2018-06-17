// EXTRACTING A REUSABLE DATA SERVICE

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class DataService {
  // private url;

  constructor(private url: string,  private http: Http) {}

  getAll() {
    return this.http.get(this.url);
  }

  create(newResource) {
    return this.http.post(this.url, JSON.stringify(newResource));
  }

  update(resource) {
    return this.http.put(this.url + '/' + resource.id, JSON.stringify(resource));
  }

  delete(resource) {
    return this.http.delete(this.url + '/' + resource.id);
  }
}
