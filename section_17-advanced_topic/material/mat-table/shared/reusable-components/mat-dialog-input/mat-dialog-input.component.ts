import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface IDialogInputModel {
    property: string;
}

@Component({
    selector: 'mat-dialog-input',
    templateUrl: './mat-dialog-input.component.html',
    styleUrls: ['./mat-dialog-input.component.scss']
})
export class MatDialogInputComponent implements OnInit {

    public formModel = {};
    public property: any;
    public isMax: boolean;
    public length: string;

    constructor(
        public dialogRef: MatDialogRef<MatDialogInputComponent>,
        @Inject(MAT_DIALOG_DATA) obj: any
    ) {
        const { isMax, length } = obj.maxlength;
        this.isMax = isMax;
        this.length = length;

        this.property = Object.keys(obj.value)[0];
        if (obj.value[this.property]) {
            if (this.isDate(obj.value[this.property])) {
                this.formModel[this.property] = new Date(obj.value[this.property]).toLocaleDateString();
            } else {
                this.formModel[this.property] = obj.value[this.property];
            };
        };
    }

    private isDate(value): boolean {
        const string = new RegExp('^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$');
        return string.test(value);
    }

    public onNoClick(): void {
        this.dialogRef.close();
    }

    public ngOnInit(): void {

    }

}
