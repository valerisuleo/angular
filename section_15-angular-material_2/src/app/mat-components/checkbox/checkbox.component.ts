import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

    constructor() { }

    isChecked = false;

    onchange(e) {
        console.log(e);
        
    }

    ngOnInit(): void {
    }

}
