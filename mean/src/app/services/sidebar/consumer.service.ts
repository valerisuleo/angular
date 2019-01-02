import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { DataService } from '../data.service';


@Injectable()
export class ConsumerService extends DataService {

  constructor(http: Http) {
    super('http://127.0.0.1:8180/DocCRMH3G/code/getDocsCodaClassificazioneFaxInConsumer', http);
  }
}
