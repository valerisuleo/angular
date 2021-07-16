import { Component, OnInit } from '@angular/core';
import { combineLatest, of, zip } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { TodosService } from '../service/todos.service';
import { UsersService } from '../service/users.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        private todosService: TodosService,
        private usersService: UsersService,
    ) { }


    getAll(...fn) {
        return combineLatest([
            ...fn
        ]).subscribe((res) => {
            console.log(res);
        })
    }

    getTodo() {
        return this.usersService
            .getCollection()
            .pipe(
                switchMap((todos: any) => {
                    const current = todos.find((obj) => {
                        return obj.name === 'Leanne Graham';
                    });
                    return this.usersService.getItem(current.id)
                }))
            .pipe(
                map((data) => {
                    return data;
                })
            )
    }

    ngOnInit(): void {
        const res = this.getTodo();
        
        // this.getAll(
        //     this.todosService.getCollection(),
        //     this.usersService.getCollection()
        // )
    }

}
