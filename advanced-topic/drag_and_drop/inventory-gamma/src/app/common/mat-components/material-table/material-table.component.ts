import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
    selector: 'material-table',
    templateUrl: './material-table.component.html',
    styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit {
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    @Input() columns: string[] = [];
    @Input() collection;
    dataSource;

    constructor() {
        
    }
    
    ngOnInit(): void {        
        this.dataSource = new MatTableDataSource(this.collection);
        this.dataSource.sort = this.sort;
        
    }

}
