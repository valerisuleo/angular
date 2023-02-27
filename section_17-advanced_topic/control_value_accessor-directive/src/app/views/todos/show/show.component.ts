import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodosService } from "../todos.service";
import { ITodo } from "../interface";

@Component({
    selector: "todo-show",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./show.component.html",
    styleUrls: ["./show.component.scss"],
})
export class ShowComponent implements OnInit {
    todo = {} as ITodo;
    constructor() {}
    
    ngOnInit(): void {
        const { data } = history.state;
        if (data) {
            this.todo = data;
        }
    }
}
