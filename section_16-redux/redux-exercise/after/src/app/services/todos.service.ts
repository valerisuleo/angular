import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs';
import { DataService } from './data.service';
import { IWidget } from '../interfaces';


@Injectable()
export class TodosService extends DataService {
    
    @Output() public handleDelete = new EventEmitter();
    
    private subject = new Subject();
    public data: IWidget;

    constructor(http: Http) {
        super('https://jsonplaceholder.typicode.com/todos', http);
    }

    sendData() {
        this.subject.next(this.data);
    }

    get handleSubscription() {
        return this.subject.asObservable();
    }

    onDelete(arg: boolean) {
        this.handleDelete.emit(arg);
    }
}