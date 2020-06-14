import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../todos.service';
import { finalize } from 'rxjs/operators';

export interface ITodo {
    completed: boolean,
    id: number,
    title: string,
    userId: number,
}

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

    progress: number = 0;
    timer: any;

    isLoaded: boolean = false;
    todos: ITodo[] = [];

    constructor(private service: TodosService) { }

    todosIndex() {
        this.service.getCollection()
            .pipe(
                finalize(() => {
                    this.isLoaded = true;
                })
            )
            .subscribe((response: ITodo[]) => {
                this.todos = response;
            });
    }

    renderSpinner() {
        this.timer = setInterval(() => {
            this.progress = this.progress + 1;
            if (this.progress === 100) {
                clearInterval(this.timer);
            }
        }, 20)

    }

    ngOnInit(): void {
        setTimeout(() => {
            this.todosIndex();
        }, 1000);
        this.renderSpinner();
    }

}
