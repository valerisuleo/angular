import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material.module";
import { MaterialTableComponent } from "./material-table/material-table.component";
import { HideTh } from "./material-table/hideTh.pipe";
import { FitlerComponent } from './fitler/fitler.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [MaterialTableComponent, HideTh, FitlerComponent],
  declarations: [MaterialTableComponent, HideTh, FitlerComponent],
  providers: [],
})
export class MaterialComponentsModule {}
