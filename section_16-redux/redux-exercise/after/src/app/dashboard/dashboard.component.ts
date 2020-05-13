import { Component, OnInit } from '@angular/core';
import { BootstrapFormComponent } from '../reusable-components/form/bootstrap-form/bootstrap-form.component';
import { TodosService } from '../services/todos.service';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import ACTIONS from '../actions'

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BootstrapFormComponent implements OnInit {

    @select() todos;

    // to create form
    name: string = 'todo';
    
    constructor(private service: TodosService, private ngRedux: NgRedux<IAppState>) {
        super()
    }

    todosIndex() {
        this.service.getTodos();
    }

    todoCreate() {
        const { todo } = this.formGroup.value;
        this.ngRedux.dispatch({
            type: ACTIONS.CREATE,
            title: todo,
            completed: false,
            lastUpdate: this.getTime()
        });
    }

    todoDelete(todo) {
        this.ngRedux.dispatch({ type: ACTIONS.DELETE, current: todo });
    }

    handleSubmit(isSubmitted: boolean) {
        if (isSubmitted) {
            this.todoCreate();
            this.formGroup.reset();
        }
    }

    toggleTask(todo) {
        this.ngRedux.dispatch({ type: ACTIONS.UPDATE, current: todo });

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
    }
}
