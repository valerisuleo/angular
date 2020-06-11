import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CheckboxComponent } from './mat-components/checkbox/checkbox.component';
import { RadioComponent } from './mat-components/radio/radio.component';
import { SelectComponent } from './mat-components/select/select.component';
import { InputsComponent } from './mat-components/inputs/inputs.component';
import { TextAreasComponent } from './mat-components/text-areas/text-areas.component';
import { DatepickersComponent } from './mat-components/datepickers/datepickers.component';

const routes: Routes = [
    { path: 'datepicker', component: DatepickersComponent },
    { path: 'textarea', component: TextAreasComponent },
    { path: 'input', component: InputsComponent },
    { path: 'select', component: SelectComponent },
    { path: 'radio', component: RadioComponent },
    { path: 'checkbox', component: CheckboxComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
