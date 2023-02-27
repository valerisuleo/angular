import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bootstrap-form-group-input',
    templateUrl: './form-group-input.component.html',
    styleUrls: ['./form-group-input.component.scss']
})
export class FormGroupInputComponent implements OnInit {
    @Input() name: any;
    @Input() formGroup: any;
    constructor() { }

    ngOnInit(): void {
    }

}
