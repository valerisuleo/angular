import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'bootstrap-form',
    templateUrl: './bootstrap-form.component.html',
    styleUrls: ['./bootstrap-form.component.scss']
})
export class BootstrapFormComponent implements OnInit {
    @Output('handleSubmit') onSubmit = new EventEmitter();
    @Input() formGroup: FormGroup;

    isSubmitted: boolean = false;
    
    constructor() { }

    formMaker(key) {
        this.formGroup = new FormGroup({
            [key]: new FormControl('', [
                Validators.required
            ])
        });
    }

    submit() {        
       this.onSubmit.emit(this.isSubmitted = true);
    }

    ngOnInit(): void {        
    }

}
