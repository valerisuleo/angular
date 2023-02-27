import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BootstrapFormComponent } from '../../form-container/form-container.component';

@Component({
    selector: 'material-dialog-form',
    templateUrl: './material-dialog-form.component.html',
    styleUrls: ['./material-dialog-form.component.scss']
})
export class MaterialDialogFormComponent extends BootstrapFormComponent implements OnInit {

    private data: any[];
    public isValid: boolean;

    constructor(
        public dialogRef: MatDialogRef<MaterialDialogFormComponent>,
        @Inject(MAT_DIALOG_DATA) obj: any) {
        super();
        this.data = obj;
    }

    handleValidation(e: boolean) {
        this.isValid = e;
    }

    public onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit(): void {
        if (this.data.length) {
            this.formMaker(this.data);
        }
    }

}
