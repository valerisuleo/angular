import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

    data = { counter: 0 };

    constructor() { }

    increment() {
        //  this.data.counter++;
        // this.data = { counter: ++this.data.counter }
        const clone = { ...this.data };
        clone.counter++;
        this.data = clone;
    }

    ngOnInit(): void {
    }

}
