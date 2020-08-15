import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';


@Injectable()
export class PropertyService extends DataService {
  
  constructor(http: Http) {
    super('http://localhost:3000/propertys', http);
  }
}
