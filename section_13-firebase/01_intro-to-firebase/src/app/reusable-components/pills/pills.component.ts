import { Component, OnInit, Input } from '@angular/core';
import { ITab } from '../../views/courses/interfaces';

@Component({
    selector: 'bootstrap-pills',
    templateUrl: './pills.component.html',
    styleUrls: ['./pills.component.scss']
})
export class PillsComponent implements OnInit {

    @Input() tab: ITab;
    @Input() viewMode: string;

    constructor() { }

    ngOnInit(): void {
    }

}
