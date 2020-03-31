import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'bootstrap-form-container',
    templateUrl: './form-container.component.html',
    styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {
    @Input() formObj: any;
    @Input() title: string;
    @Output() onFormSubmitted = new EventEmitter();

    constructor() { }

    submit() {
        this.onFormSubmitted.emit(this.formObj);
    }

    ngOnInit(): void {
    }

}
