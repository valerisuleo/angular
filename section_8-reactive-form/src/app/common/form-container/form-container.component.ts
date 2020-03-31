import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'bootstrap-form-container',
    templateUrl: './form-container.component.html',
    styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {
    @Input() title: string;
    @Input() formGroup: any;
    @Output('handleSubmit') ngSubmit = new EventEmitter();

    isSubmmitted = false;

    constructor() { }
  
    submit() {
        this.ngSubmit.emit(this.isSubmmitted = true);
    }

    ngOnInit(): void {
    }

}
