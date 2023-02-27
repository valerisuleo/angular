import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnChanges {

    @Input() data;

    constructor() { }

    ngOnChanges(change: SimpleChanges): void {
        console.log('counter', change);
    }

}
