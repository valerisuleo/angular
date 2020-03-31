import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'bootstrap-form-group',
    templateUrl: './form-group.component.html',
    styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnChanges {
    @Input() formGroup: any;
    @Input() name: string;

    constructor() { }

    // ngMessages
    get input() {
        return this.formGroup.get(this.name);
    }

    ngOnChanges(change: SimpleChanges): void {        
        
    }
}
