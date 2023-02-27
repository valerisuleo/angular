import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'bootstrap-form-group-checkbox',
    templateUrl: './form-group-checkbox.component.html',
    styleUrls: ['./form-group-checkbox.component.scss']
})
export class FormGroupCheckboxComponent implements OnChanges {
    @Input() type: any;
    @Input() label: any;
    @Input() formGroup: any;

    constructor() { }

    ngOnChanges(change: SimpleChanges): void {
        // console.log(change);
    }

}
