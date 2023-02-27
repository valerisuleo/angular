import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class TodosService {
    constructor(private httpClient: HttpClient) {}

    getTodos() {
        return this.httpClient.get(
            "https://jsonplaceholder.typicode.com/todos"
        );
    }

    getTodo(id) {
        return this.httpClient.get(
            `https://jsonplaceholder.typicode.com/todos/${id}`
        );
    }
}
