import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
// components
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { SelectComponent } from './select/select.component';
import { InputsComponent } from './inputs/inputs.component';
import { TextAreasComponent } from './text-areas/text-areas.component';
import { DatepickersComponent } from './datepickers/datepickers.component';
import { IconsComponent } from './icons/icons.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ChipsComponent } from './chips/chips.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { TabsComponent } from './tabs/tabs.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { TypoComponent } from './typo/typo.component';
import { TableComponent } from './table/table.component';
import { FilterPipe } from './table/filter.pipe';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
    declarations: [
        CheckboxComponent,
        RadioComponent,
        SelectComponent,
        InputsComponent,
        TextAreasComponent,
        DatepickersComponent,
        IconsComponent,
        ButtonsComponent,
        ChipsComponent,
        SpinnerComponent,
        TooltipsComponent,
        TabsComponent,
        DialogsComponent,
        TypoComponent,
        TableComponent,
        FilterPipe,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSelectModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatIconModule,
        MatButtonModule,
        MatChipsModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        MatTabsModule,
        MatDialogModule,
        MatTableModule,
        MatSortModule
    ]
})
export class MaterialModule { }
