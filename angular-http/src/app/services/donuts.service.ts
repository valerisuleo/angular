import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { DataService } from './data.service';


@Injectable()
export class DonutsService extends DataService {

  constructor(http: Http) {
    super('https://ga-doughnuts.herokuapp.com/doughnuts', http);
  }
}


// BEFORE EXTRACTING A REUSABLE DATA SERVICE
// @Injectable()
// export class DonutsService {
//
//   constructor(private http: Http) {}
//
//   getDonuts() {
//     return this.http.get('https://ga-doughnuts.herokuapp.com/doughnuts');
//   }
//
//   createDonut(newDonut) {
//     return this.http.post('https://ga-doughnuts.herokuapp.com/doughnuts', JSON.stringify(newDonut));
//   }
//
//   updateDonut(donut) {
//     return this.http.put(`https://ga-doughnuts.herokuapp.com/doughnuts/${donut.id}`, JSON.stringify(donut));
//   }
//
//   deleteDonut(donut) {
//     return this.http.delete(`https://ga-doughnuts.herokuapp.com/doughnuts/${donut.id}`);
//   }
// }
