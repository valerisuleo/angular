import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        DragDropModule,
        MatDialogModule,
        MatTableModule,
        MatSortModule,
    ],
    exports: [
        DragDropModule,
        MatDialogModule,
        MatTableModule,
        MatSortModule,
    ],
    declarations: [],
    providers: [],
})
export class MaterialModule { }
