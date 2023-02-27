import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient) { }

    getAll() {
       return this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
    }
    
}