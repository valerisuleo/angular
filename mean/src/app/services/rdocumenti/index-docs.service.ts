import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../data.service';


@Injectable()
export class IndexDocsService extends DataService {

  constructor(http: Http) {
    super('https://jsonplaceholder.typicode.com/comments', http);
  }
}
