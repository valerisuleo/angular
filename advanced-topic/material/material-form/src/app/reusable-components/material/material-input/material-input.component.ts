import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'material-input',
    templateUrl: './material-input.component.html',
    styleUrls: ['./material-input.component.scss']
})
export class MaterialInputComponent implements OnInit {
    @Input() name: any;
    @Input() type: any;
    @Input() label: any;
    @Input() formGroup: any;
    @Output('handleValidation') typing = new EventEmitter();

    constructor() { }

    // ngMessages
    get input() {
        setTimeout(() => {
            this.typing.emit(this.formGroup.get(this.name).valid);
        });
        return this.formGroup.get(this.name);
    }

    ngOnInit(): void {

    }

}



