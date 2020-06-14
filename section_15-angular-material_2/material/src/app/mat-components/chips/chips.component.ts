import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-chips',
    templateUrl: './chips.component.html',
    styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {

    categories = [
        { name: 'beginner', isSelected: false },
        { name: 'intermediate', isSelected: false },
        { name: 'advanced', isSelected: false },
    ]

    size = [
        { name: 'small', isSelected: false },
        { name: 'medium', isSelected: false },
        { name: 'large', isSelected: false },
    ]

    constructor() { }

    toggleSingleChip(current) {
        this.categories
            .filter(el => el != current)
            .forEach(item => item.isSelected = false);
        current.isSelected = !current.isSelected;
    }

    toggleMultipleChips(current) {
        current.isSelected = !current.isSelected;
    }

    ngOnInit(): void {
    }

}
