import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class DonutsService {
  // private url = 'https://ga-doughnuts.herokuapp.com/doughnuts';

  constructor(private http: Http) {}

  getDonuts() {
    return this.http.get('https://ga-doughnuts.herokuapp.com/doughnuts');
  }

  createDonut(newDonut) {
    return this.http.post('https://ga-doughnuts.herokuapp.com/doughnuts', JSON.stringify(newDonut));
  }

  updateDonut(donut) {
    return this.http.put(`https://ga-doughnuts.herokuapp.com/doughnuts/${donut.id}`, JSON.stringify(donut));
  }

  deleteDonut(donut) {
    return this.http.delete(`https://ga-doughnuts.herokuapp.com/doughnuts/${donut.id}`);
  }

  // deleteDonut(donut) {
  //   return this.http.delete(this.url + '/' + donut.id);
  // }
}
