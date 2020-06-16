import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'bootstrap-list',
    templateUrl: './bootstrap-list.component.html',
    styleUrls: ['./bootstrap-list.component.scss']
})
export class BootstrapListComponent implements OnChanges {
    @Input() props: any;

    list: any[] = [];
    propertyKey: string;

    constructor() { }

    toggleActiveClass(current) {
        this.list
            .filter(el => el != current)
            .forEach(item => item.isSelected = false);
        current.isSelected = !current.isSelected;
    }

    ngOnChanges(change: SimpleChanges): void {
        const { currentValue, firstChange } = change.props;
        if (currentValue && !firstChange) {
            const { list, key } = currentValue;
            this.list = list;
            this.propertyKey = key;
        }
    }
}


