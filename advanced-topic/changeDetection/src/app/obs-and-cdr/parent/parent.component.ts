import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'obs-and-cdr-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss']
})
export class ParentComponentCdr implements OnInit {

    _counter = 0;
    data$ = new BehaviorSubject({ counter: 0 });

    constructor() { }

    increment() {
        this._counter = this._counter + 1;
        this.data$.next({ counter: this._counter });
    }

    ngOnInit(): void {
    }

}
