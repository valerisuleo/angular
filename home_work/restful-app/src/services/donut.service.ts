import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DonutService {

    url: string = 'http://localhost:4000/students';

    constructor(private httpClient: HttpClient) { }

    getCollection() {
        return this.httpClient.get(this.url);
    }

    getItem(id) {
        return this.httpClient.get(`${this.url}/${id}`);
    }

    update(resourceId, resourceChanges) {
        return this.httpClient.put(`${this.url}/${resourceId}`, resourceChanges);
    }

}
