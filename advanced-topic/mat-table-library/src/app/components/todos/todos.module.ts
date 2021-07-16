import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from '../../shared/material/material-components.module';
import { TodosComponent } from './todos.component';
import { TodosService } from './services/todos.service';

@NgModule({
    imports: [
        CommonModule,
        MaterialComponentsModule,
        RouterModule.forChild([
            { path: 'todos', component: TodosComponent },
        ])
    ],
    exports: [TodosComponent],
    declarations: [TodosComponent],
    providers: [
        TodosService
    ],
})
export class TodosModule { }
