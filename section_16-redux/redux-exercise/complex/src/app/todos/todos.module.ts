import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetComponent } from './widget/widget.component';

import { BootstrapCardComponent } from '../reusable-components/bootstrap-card/bootstrap-card.component';
import { BootstrapFormComponent } from '../reusable-components/form/bootstrap-form/bootstrap-form.component';
import { BootstrapInputComponent } from '../reusable-components/form/bootstrap-input/bootstrap-input.component';
import { BootstrapListGroupComponent } from '../reusable-components/bootstrap-list-group/bootstrap-list-group.component';

import { TodosService } from '../services/todos.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        DashboardComponent,
        WidgetComponent,
        BootstrapCardComponent,
        BootstrapFormComponent,
        BootstrapInputComponent,
        BootstrapListGroupComponent
    ],
    declarations: [
        DashboardComponent,
        WidgetComponent,
        BootstrapCardComponent,
        BootstrapFormComponent,
        BootstrapInputComponent,
        BootstrapListGroupComponent
    ],
    providers: [
        TodosService
    ],
})
export class TodosModule { }
