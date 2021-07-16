import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatIconModule,
        MatTooltipModule,
        TableVirtualScrollModule,
        ScrollingModule,
        MatFormFieldModule,
        MatInputModule,
        MatSortModule
    ],
    exports: [
        MatTableModule,
        MatIconModule,
        MatTooltipModule,
        TableVirtualScrollModule,
        ScrollingModule,
        MatFormFieldModule,
        MatInputModule,
        MatSortModule
    ],
    declarations: [],
    providers: [],
})
export class MaterialModule { }
