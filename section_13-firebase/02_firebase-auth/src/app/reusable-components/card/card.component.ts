import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bootstrap-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() currentObj: any;

    constructor() { }

    ngOnInit(): void {        
    }

}
