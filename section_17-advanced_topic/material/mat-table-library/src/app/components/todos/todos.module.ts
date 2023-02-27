import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from '../../shared/material/material-components.module';
import { TodosComponent } from './todos.component';
import { TodosService } from './services/todos.service';
import { PostsService } from '../posts/services/posts.service';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
    imports: [
        CommonModule,
        MatTabsModule,
        MaterialComponentsModule,
        RouterModule.forChild([
            { path: 'todos', component: TodosComponent },
        ])
    ],
    exports: [TodosComponent],
    declarations: [TodosComponent],
    providers: [
        TodosService,
        PostsService
    ],
})
export class TodosModule { }
