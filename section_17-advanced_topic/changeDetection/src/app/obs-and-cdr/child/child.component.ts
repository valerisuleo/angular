import { Component, OnInit, Input, SimpleChanges, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'obs-and-cdr-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class ChildComponent implements OnInit {

    @Input() data: Observable<any>;
    _data;

    constructor(private cdr: ChangeDetectorRef) { }

    ngOnInit() {
        this.data.subscribe((value) => {
            this._data = value;
            this.cdr.markForCheck();
        });
    }


}
