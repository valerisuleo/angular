import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';


@Injectable()
export class PostsService extends DataService {

  @Output () currentSelectedChanged = new EventEmitter<any>();


  constructor(http: Http) {
    super('https://jsonplaceholder.typicode.com/posts', http);
    // super('http://localhost:3000/propertys', http);
  }

  resfreshContent(args: any) {
    this.currentSelectedChanged.emit(args);
  }
}
