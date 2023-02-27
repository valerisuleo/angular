import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'form-container',
    templateUrl: './form-container.component.html',
    styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {
    
    @Input() formGroup: FormGroup;
    @Output('handleSubmit') ngSubmit = new EventEmitter();

    inputs = [];
    selects = [];
    checkbox = [];
    isSubmitted: boolean = false;
    
    constructor() { }

    formMaker(array) {
        let obj = {};
        array.forEach((item) => {
            const key = item.type;
            obj[key] = new FormControl('', [
                item.isRequired ? Validators.required : Validators.nullValidator,
                Validators.minLength(item.minLenght),
            ])
        });
        this.formGroup = new FormGroup(obj);
        console.log('this.formGroup', this.formGroup);
        
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
