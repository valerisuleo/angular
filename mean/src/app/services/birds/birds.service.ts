import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { DataService } from '../data.service';


@Injectable()
export class BirdsService extends DataService {

  constructor(http: Http) {
    super('http://localhost:3000/api/birds', http);
  }
}
