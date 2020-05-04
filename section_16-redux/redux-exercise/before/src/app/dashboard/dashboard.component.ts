import { Component, OnInit } from '@angular/core';
import { BootstrapFormComponent } from '../reusable-components/form/bootstrap-form/bootstrap-form.component';
import { TodosService } from '../services/todos.service';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BootstrapFormComponent implements OnInit {

    todos = [];
    newTodo = { title: '', completed: false }
    widget = { lastUpdate: '', todos: [] }

    name: string = 'todo';
    lastUpdate: string = '19:42:07';

    constructor(private service: TodosService) {
        super()
    }

    fromWidget() {
        this.service.handleDelete
            .subscribe((emptyArray: boolean) => {
                if (emptyArray) {
                    this.todos.length = 0;
                    this.handleSubscription(this.widget);
                }
            });
    }

    todosIndex() {
        this.service.getAll()
            .subscribe((response) => {
                const todos = response.splice(0, 5);
                this.todos = todos;
                this.widget.lastUpdate = this.lastUpdate;
                this.widget.todos = this.todos;
                this.handleSubscription(this.widget);
            });
    }

    todoCreate() {
        const { todo } = this.formGroup.value;
        this.newTodo.title = todo;
        this.todos.push(this.newTodo);
        this.widget.lastUpdate = this.getTime();
        this.widget.todos = this.todos;
        this.handleSubscription(this.widget);
    }

    todoDelete(todo) {
        const index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
        this.widget.todos = this.todos;
        this.handleSubscription(this.widget);
    }

    handleSubmit(isSubmitted: boolean) {
        if (isSubmitted) {
            this.todoCreate();
            this.formGroup.reset();
        }
    }

    handleSubscription(args: any) {
        this.service.data = args;
        this.service.sendData();
    }

    toggleTask(todo) {
        const current = todo;
        current.completed = !current.completed
        let index = this.todos.indexOf(todo);
        this.todos[index] = current;
    }

    getTime(): string {
        const date = new Date();
        const hours = date.getHours();
        const minutes = "0" + date.getMinutes();
        const seconds = "0" + date.getSeconds();
        const formattedTime =
            hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
        return formattedTime;
    }

    ngOnInit(): void {
        this.formMaker('todo');
        this.todosIndex();
        this.fromWidget();
    }
}
