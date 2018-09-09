import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { DataService } from '../data.service';


@Injectable()
export class ClienteService extends DataService {

  constructor(http: Http) {
    super('https://jsonplaceholder.typicode.com/posts', http);
    // super('http://127.0.0.1:8180/DocCRMH3G/code/getDocsCodaClassificazione?idCoda=4', http);
  }
}
