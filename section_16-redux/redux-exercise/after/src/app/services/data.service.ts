import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import ACTIONS from '../actions';


@Injectable()
export class DataService {

    constructor(
        private url: string,
        private http: Http,
        private ngRedux: NgRedux<IAppState>
    ) { }

    // CLASSIC WAY
    getAll() {
        return this.http.get(this.url)
        .pipe(map(response => response.json()));
    }

    // REDUX WAY
    getTodos() {
        this.http.get(this.url)
        .subscribe((data) => {
            let todos = data.json()
            todos = todos.splice(0, 5);
            this.ngRedux.dispatch({ type: ACTIONS.GET, todos: todos })
        })
    }

}
