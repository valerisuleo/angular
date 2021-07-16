import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogInputComponent } from '../mat-dialog-input/mat-dialog-input.component';
import { IAlert } from './interface';

@Component({
    selector: 'bs-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

    public alert = {} as IAlert;

    constructor(
        public dialogRef: MatDialogRef<MatDialogInputComponent>,
        @Inject(MAT_DIALOG_DATA) data: any
    ) {
        const { className, heading, body, buttons } = data;
        
        this.alert.heading = heading;
        this.alert.body = body;
        this.alert.className = `alert alert-${className}`;
        this.alert.buttons = buttons;
    }

    ngOnInit(): void {
    }

}
