import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GenericValidators } from '../../../../reusable-components/form-container/generic.validators';
import { MaterialDialogFormComponent } from '../../../../reusable-components/material/material-dialog-form/material-dialog-form.component';

@Component({
    selector: 'licence-name',
    templateUrl: './licence-name.component.html',
    styleUrls: ['./licence-name.component.scss']
})
export class LicenceNameComponent implements OnInit {

    @Output('handleNameClose') afterClosed = new EventEmitter();

    constructor(public dialog: MatDialog) { }

    openDialog() {
        const formTemplate = [
            {
                name: "licenceName",
                type: "text",
                label: "Licence Name",
                validators: [
                    GenericValidators.required('Licence Name'),
                ]
            }
        ];
        this.dialog.open(MaterialDialogFormComponent, { width: '500px', data: formTemplate })
            .afterClosed()
            .subscribe((inputValue) => {
                this.afterClosed.emit(inputValue);
            });
    }

    ngOnInit(): void {
    }

}
