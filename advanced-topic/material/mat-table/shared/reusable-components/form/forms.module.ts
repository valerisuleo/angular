import { NgModule } from '@angular/core';
import { FormContainerComponent } from './form-container/form-container.component';
import { MaterialInputComponent } from './material-input/material-input.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    exports: [
        FormContainerComponent,
        MaterialInputComponent
    ],
    declarations: [
        FormContainerComponent,
        MaterialInputComponent
    ],
    providers: [],
})
export class FormGroupModule { }
