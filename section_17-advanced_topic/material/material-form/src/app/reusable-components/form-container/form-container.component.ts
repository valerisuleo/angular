import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'form-container',
    templateUrl: './form-container.component.html',
    styleUrls: ['./form-container.component.scss']
})
export class BootstrapFormComponent implements OnInit {

    @Input() formGroup: FormGroup;
    @Output('handleSubmit') ngSubmit = new EventEmitter();

    public inputs = [];
    public selects = [];
    public checkbox = [];
    public isSubmitted: boolean = false;

    constructor() { }
    public formMaker(array) {
        let obj = {};
        array.forEach((item) => {
            const key = item.name;
            obj[key] = new FormControl('', item.validators)
        });
        this.formGroup = new FormGroup(obj);
        this.formPartials(array)
    }

    public formPartials(array) {
        array.forEach((item) => {
            if (item.type !== 'select' && item.type !== 'checkbox') {
                this.inputs.push(item);
            } else if (item.type === 'checkbox') {
                this.checkbox.push(item);
            } else {
                this.selects.push(item);
            }
        });
    }

    ngOnInit(): void {
    }

}
