import { DataService } from '../../../shared/data.service';
import { HttpClient } from '@angular/common/http';

export class PostsService extends DataService {
    constructor(http: HttpClient) {
        super('https://jsonplaceholder.typicode.com/posts', http);
    }

}