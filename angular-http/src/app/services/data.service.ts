// 2. In order to do that we are going to use an 'observable' operator called 'map operator': We can transform the items in observable.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class DataService {
  // private url;

  constructor(private url: string,  private http: Http) {}

  getAll() {
    return this.http.get(this.url)
    // 3 we are transforming the response obj into an array of js objects
    .map(response => response.json());
  }

  create(newResource) {
    return this.http.post(this.url, JSON.stringify(newResource))
    .map(response => response.json());
  }

  update(resource) {
    return this.http.put(this.url + '/' + resource.id, JSON.stringify(resource))
    .map(response => response.json());

  }

  delete(resource) {
    return this.http.delete(this.url + '/' + resource.id);
  }
}



// _____________________EXTRACTING A REUSABLE DATA SERVICE_____________________
//
// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
//
//
// @Injectable()
// export class DataService {
//   // private url;
//
//   constructor(private url: string,  private http: Http) {}
//
//   getAll() {
//     return this.http.get(this.url);
//   }
//
//   create(newResource) {
//     return this.http.post(this.url, JSON.stringify(newResource));
//   }
//
//   update(resource) {
//     return this.http.put(this.url + '/' + resource.id, JSON.stringify(resource));
//   }
//
//   delete(resource) {
//     return this.http.delete(this.url + '/' + resource.id);
//   }
// }
