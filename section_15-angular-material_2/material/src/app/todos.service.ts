import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable()
export class TodosService {

    constructor(private http: Http) { }

    getCollection() {
        return this.http
            .get('https://jsonplaceholder.typicode.com/todos')
            .pipe(
                map(res => res.json())
            )
    }
}

