import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GenericValidators } from '../../../../reusable-components/form-container/generic.validators';
import { MaterialDialogFormComponent } from '../../../../reusable-components/material/material-dialog-form/material-dialog-form.component';
import { CustomValidators } from './minimum.validators';

@Component({
    selector: 'licence-number',
    templateUrl: './licence-number.component.html',
    styleUrls: ['./licence-number.component.scss']
})
export class LicenceNumberComponent implements OnInit {
    @Input() assignedLicense: number;
    @Output('handleNumberClose') afterClosed = new EventEmitter();

    constructor(public dialog: MatDialog) { }

    openDialog() {
        const formTemplate = [
            {
                name: "licenceNumber",
                type: "text",
                label: "Licence Number",
                validators: [
                    GenericValidators.required('Licence Number'),
                    CustomValidators.isHigher('Licence Number', this.assignedLicense),
                    CustomValidators.isTooManyDigits('Licence Number')
                ]
            }
        ];
        this.dialog.open(MaterialDialogFormComponent, { width: '500px', data: formTemplate })
            .afterClosed()
            .subscribe((inputValue) => {
                this.afterClosed.emit(inputValue)
            });
    }

    ngOnInit(): void {

    }

}
