import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class DataService {
    constructor(
        @Inject(String) private url: string,
        private http: HttpClient
    ) { }

    public getCollection(): Observable<object> {
        return this.http.get(this.url);
    }

    public getItem(id): Observable<object> {
        return this.http.get(`${this.url}/${id}`);
    }

}

