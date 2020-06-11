import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-datepickers',
    templateUrl: './datepickers.component.html',
    styleUrls: ['./datepickers.component.scss']
})
export class DatepickersComponent implements OnInit {

    minDate = new Date(2017, 1, 1);
    maxDate = new Date(2017, 1, 8);

    constructor() { }

    ngOnInit(): void {
    }

}
