import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { IWidget } from '../interfaces';

@Component({
    selector: 'widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

    constructor(private service: TodosService) { }

    totalItems: number;
    lastUpdate: string
    todos = [];

    fromDashboard() {
        this.service.handleSubscription
        .subscribe((data: IWidget) => {
            this.todos = data.todos;
            this.totalItems = data.todos.length;
            this.lastUpdate = data.lastUpdate;
        });
    }

    todosDeleteAll() {
        this.service.onDelete(true);
    }

    ngOnInit(): void {
        this.fromDashboard();
    }

}
