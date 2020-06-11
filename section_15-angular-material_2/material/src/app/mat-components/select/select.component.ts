import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

    colors = [
        {id: 1, name: 'red'},
        {id: 2, name: 'green'},
        {id: 3, name: 'blue'},
    ];

    preSelected = 2; // green will be the preselected color

    constructor() { }

    ngOnInit(): void {
    }

}
