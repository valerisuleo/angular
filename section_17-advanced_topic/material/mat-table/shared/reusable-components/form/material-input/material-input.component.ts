import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'material-input',
    templateUrl: './material-input.component.html',
    styleUrls: ['./material-input.component.scss']
})
export class MaterialInputComponent implements OnInit {

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
