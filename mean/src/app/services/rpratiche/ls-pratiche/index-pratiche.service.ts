import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../../data.service';



@Injectable()
export class IndexPraticheService extends DataService {

  constructor(http: Http) {
    super('https://jsonplaceholder.typicode.com/todos', http);
  }
}
