import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ITab } from './interface';

@Component({
    selector: 'bootstrap-tab',
    templateUrl: './pills.component.html',
    styleUrls: ['./pills.component.scss']
})
export class PillsComponent implements OnChanges {

    @Input() tab: ITab;
    @Input() viewMode: string;

    constructor() { }

    ngOnChanges(change: SimpleChanges): void {
        if (change.tab) {
            // do something...
        }
    }
}
