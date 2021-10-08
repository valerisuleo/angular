import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { MaterialTableDialogComponent } from './material-table-dialog/material-table-dialog.component';
import { MaterialTableComponent } from './material-table/material-table.component';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        MaterialTableDialogComponent,
        MaterialTableComponent
    ],
    declarations: [
        MaterialTableDialogComponent,
        MaterialTableComponent
    ],
    providers: [],
    entryComponents:[MaterialTableDialogComponent]
})
export class MaterialComponentsModule { }
