import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bootstrap-form-group-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

    @Input() name: any;
    @Input() label: any;
    @Input() formGroup: any;

    constructor() { }

    // ngMessages
    get input() {
        return this.formGroup.get(this.name);
    }

    ngOnInit(): void {
    }

}
