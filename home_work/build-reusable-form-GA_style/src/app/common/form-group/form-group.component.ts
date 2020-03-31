import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'bootstrap-form-group',
    templateUrl: './form-group.component.html',
    styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnChanges {
    @Input() type: string;
    @Input() name: string;
    @Input() formModel: any;
    // this is the for attribute for <label for="name"></label>
    for: string;

    constructor() { }

    ngOnChanges(change: SimpleChanges): void {
        this.for = this.name;
    }

}
