import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import { MatSort } from '@angular/material/sort';
import { ITableFilter } from './interfaces';

@Component({
    selector: 'material-table',
    templateUrl: './material-table.component.html',
    styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnChanges {
    @Input() public dataSource;
    @Input() public hasVirtualScroll: boolean;
    @Input() public columns: string[];
    @Input() public tableFilter: ITableFilter;
    @Input() public label: string;
    @Output('handleSort') click = new EventEmitter();
    @ViewChild(MatSort) set matSort(ms: MatSort) {
        this.sort = ms;
    }
    private sort: MatSort;

    constructor() { }

    private createTable(table): void {
        this.dataSource = this.hasVirtualScroll ? new TableVirtualScrollDataSource(table) : new MatTableDataSource(table);
        this.dataSource.sort = this.sort;
        this.dataSource.sortingDataAccessor = (item, property) => {
            return item[property].value;
        };
        // Filter need either true or false to exevalue. 
        // We are using angular forEach and there no break for forEach so we use some instead.
        this.dataSource.filterPredicate = (data, filter: string) => {
            return this.tableFilter.keys.some((key: string) => {
                return JSON.stringify(data[key]).toLowerCase().includes(filter.toLowerCase());
            })
        };
    }

    public applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches        
        this.dataSource.filter = filterValue;
    }

    public columnSort(): void {
        if (this.dataSource) {
            const obj = {
                dataSource: this.dataSource,
                sort: this.sort
            };
            this.click.emit(obj);
        }
    }

    ngOnChanges(change: SimpleChanges): void {
        if (change && change.columns) {
            this.columns = change.columns.currentValue;
            this.hasVirtualScroll = change.hasVirtualScroll.currentValue;
        }

        if (change && change.dataSource) {            
            if (!change.dataSource.firstChange) {
                this.createTable(change.dataSource.currentValue)
            }
        }
    }
}
