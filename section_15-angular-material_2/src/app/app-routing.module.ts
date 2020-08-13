import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CheckboxComponent } from './mat-components/checkbox/checkbox.component';
import { RadioComponent } from './mat-components/radio/radio.component';
import { SelectComponent } from './mat-components/select/select.component';
import { InputsComponent } from './mat-components/inputs/inputs.component';
import { TextAreasComponent } from './mat-components/text-areas/text-areas.component';
import { DatepickersComponent } from './mat-components/datepickers/datepickers.component';
import { IconsComponent } from './mat-components/icons/icons.component';
import { ButtonsComponent } from './mat-components/buttons/buttons.component';
import { ChipsComponent } from './mat-components/chips/chips.component';
import { SpinnerComponent } from './mat-components/spinner/spinner.component';
import { TooltipsComponent } from './mat-components/tooltips/tooltips.component';
import { TabsComponent } from './mat-components/tabs/tabs.component';
import { DialogsComponent } from './mat-components/dialogs/dialogs.component';
import { TypoComponent } from './mat-components/typo/typo.component';
import { TableComponent } from './mat-components/table/table.component';

const routes: Routes = [
    { path: 'table', component: TableComponent },
    { path: 'typo', component: TypoComponent },
    { path: 'courses/edit', component: DialogsComponent },
    { path: 'dialogs', component: DialogsComponent },
    { path: 'tabs', component: TabsComponent },
    { path: 'tooltips', component: TooltipsComponent },
    { path: 'spinners', component: SpinnerComponent },
    { path: 'chips', component: ChipsComponent },
    { path: 'buttons', component: ButtonsComponent },
    { path: 'icons', component: IconsComponent },
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
