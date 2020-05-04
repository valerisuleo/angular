import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'bootstrap-input',
    templateUrl: './bootstrap-input.component.html',
    styleUrls: ['./bootstrap-input.component.scss']
})
export class BootstrapInputComponent implements OnInit {

    @Input() formGroup: FormGroup;
    @Input() name: string;

    constructor() { }

    ngOnInit(): void {
    }

}
