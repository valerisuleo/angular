import { DataService } from '../../../shared/data.service';
import { HttpClient } from '@angular/common/http';

export class TodosService extends DataService {
    constructor(http: HttpClient) {
        super('https://jsonplaceholder.typicode.com/todos', http);
    }

}