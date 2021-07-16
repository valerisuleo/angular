import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'bootstrap-form-group-select',
    templateUrl: './form-group-select.component.html',
    styleUrls: ['./form-group-select.component.scss']
})
export class FormGroupSelectComponent implements OnChanges {
    @Input() formGroup: any;
    @Input() label: any;
    @Input() type: any;
    @Input() options: any;

    constructor() { }

    ngOnChanges(change: SimpleChanges): void {
        // console.log('change', change);
    }

}
