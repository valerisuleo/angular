import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { map } from "rxjs/operators";
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class DataService {

    constructor(
        private url: string,
        private http: Http,
        private authHttp: AuthHttp
        ) { }

    getAll() {
        return this.authHttp.get(this.url)
            .pipe(map(response => response.json()));
    }
}
