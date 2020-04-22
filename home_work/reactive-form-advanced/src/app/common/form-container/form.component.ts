import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'bootstrap-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    @Input() formGroup: FormGroup;
    @Output('handleSubmit') ngSubmit = new EventEmitter();
    
    isSubmitted: boolean = false;

    inputs = [];
    selects = [];
    checkbox = [];
    
    constructor() { }

    formMaker(array) {
        let obj = {};
        array.forEach((item) => {
            const key = item.type;
            obj[key] = new FormControl('', [
                item.isRequired ? Validators.required : Validators.nullValidator,
                Validators.minLength(item.minLenght)
            ])
        });
        this.formGroup = new FormGroup(obj);
        this.formPartials(array)
    }

    formPartials(array) {
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

    submit() {
        this.ngSubmit.emit(this.isSubmitted = true);
    }

    ngOnInit(): void {
    }

}
