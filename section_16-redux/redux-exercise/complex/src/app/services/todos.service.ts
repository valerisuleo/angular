import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';


@Injectable()
export class TodosService extends DataService {
    
    constructor(http: Http, ngRedux: NgRedux<IAppState>) {
        super('https://jsonplaceholder.typicode.com/todos', http, ngRedux );
    }
}