import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'angular-if',
    templateUrl: './angular-if.component.html',
    styleUrls: ['./angular-if.component.scss']
})
export class AngularIfComponent implements OnInit {

    isToggle: boolean = false

    constructor() { }

    ngOnInit(): void {
    }

}
