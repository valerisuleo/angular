import { Component, OnInit } from '@angular/core';
import { BootstrapFormComponent } from '../reusable-components/form/bootstrap-form/bootstrap-form.component';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BootstrapFormComponent implements OnInit {

    todos = [
        { task: 'washing', done: false },
        { task: 'cleaning', done: false },
        { task: 'homework', done: false },
        { task: 'sleep', done: false },
        { task: 'buy shoes', done: false }
    ];

    lastUpdate: string = '19:42:07';
    name: string = 'todo';


    newTodo = { task: '', done: false }

    constructor() {
        super()
    }

    taskCompleted(todo) {
        const current = todo;
        current.done = !current.done
        let index = this.todos.indexOf(todo);
        this.todos[index] = current;
    }

    todoDelete(todo) {
        const index = this.todos.indexOf(todo);
        this.todos.splice(index, 1)
    }

    todosDeleteAll() {
        this.todos.length = 0
    }

    todoNew() {
        const { todo } = this.formGroup.value;
        this.newTodo.task = todo;
        this.todos.push(this.newTodo);
        this.lastUpdate = this.getTime();        
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

    handleSubmit(isSubmitted: boolean) {
        if (isSubmitted) {
            this.todoNew();
            this.formGroup.reset();
        }
    }

    ngOnInit(): void {
        this.formMaker('todo')
    }


}
