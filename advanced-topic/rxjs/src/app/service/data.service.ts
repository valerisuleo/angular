import { HttpClient } from '@angular/common/http';

export class DataService {

    constructor(private url: string, private http: HttpClient) { }

    getCollection() {
        return this.http.get(this.url);
    }

    getItem(id) {
        return this.http.get(this.url + '/' + id);
    }


}
