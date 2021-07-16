import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bootstrap-alert',
    templateUrl: './bootstrap-alert.component.html',
    styleUrls: ['./bootstrap-alert.component.scss']
})
export class BootstrapAlertComponent implements OnInit {

    @Input() public className: string;
    public contextualClasses: string;

    constructor() { }

    public getAlertClasses(): void {
        let classes: string = 'alert alert-';
        classes += this.className;
        this.contextualClasses = classes;
    }

    ngOnInit(): void {
        this.getAlertClasses();
    }

}
