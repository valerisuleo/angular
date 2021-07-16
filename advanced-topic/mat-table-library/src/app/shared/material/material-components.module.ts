import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { MaterialTableComponent } from './material-table/material-table.component';
import { HideTh } from './material-table/hideTh.pipe';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [MaterialTableComponent, HideTh],
    declarations: [MaterialTableComponent, HideTh],
    providers: [],
})
export class MaterialComponentsModule { }
