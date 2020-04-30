import { Component, OnInit } from '@angular/core';
import { ITab } from '../common/pills/interface';
import { FakeService } from '../services/fake.service';

@Component({
    selector: 'switch-case',
    templateUrl: './angular-switch-case.component.html',
    styleUrls: ['./angular-switch-case.component.scss']
})

export class AngularSwitchCaseComponent implements OnInit {
    viewMode = 'list';
    movies = [];

    tabs: ITab[] = [
        {
            name: 'List View',
            viewMode: 'list'
        },
        {
            name: 'Table View',
            viewMode: 'table'
        },
    ];

    constructor( private service: FakeService) { }

    toggleActiveClass(current: ITab) {
        this.viewMode = current.viewMode;
    }

    ngOnInit(): void {
        this.movies = this.service.getMovies();        
    }

}
