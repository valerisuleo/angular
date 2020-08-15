import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
    selector: 'material-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    @Input() public displayedColumns: string[];
    @Input() public elementData;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    public dataSource;
    public query: string;

    constructor() { }

    createTable() {
        const table = this.elementData;
        this.dataSource = new MatTableDataSource(table);
        this.dataSource.sort = this.sort;
    }

    filterGlobal(string: string) {
        let inputValue = string.trim(); 
        inputValue = string.toLowerCase();
        this.dataSource.filter = inputValue;
    }

    ngOnInit(): void {
        this.createTable();
    }
}
