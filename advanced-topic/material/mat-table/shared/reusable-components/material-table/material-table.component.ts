import { Component, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { INavigateTo } from '../../../components/app-accounts/interfaces';
import { ITableFilter, ICell } from './interfaces';

@Component({
    selector: 'material-table',
    templateUrl: './material-table.component.html',
    styleUrls: ['./material-table.component.scss'],
})
export class MaterialTableComponent implements OnChanges {

    @Input() public displayedColumns: string[];
    @Input() public navigateToObjDetails: INavigateTo;
    @Input() public elementData;
    @Input() public tableFilter: ITableFilter;
    @Input() public isNavigationEnabled: boolean;
    @Input() public isStringTooLong: boolean;
    @Input() public isStriped: boolean;
    @Input() public label: string;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    public columns: string[];
    public dataSource;
    constructor(private router: Router) { }

    public createTable(table): void {
        const vm = this;

        vm.dataSource = new MatTableDataSource(table);
        vm.dataSource.sort = vm.sort;
        vm.dataSource.sortingDataAccessor = (item, property) => {
            return item[property].value;
        }
        // Filter need either true or false to exevalue. 
        // We are using angular forEach and there no break for forEach so we use some instead.
        vm.dataSource.filterPredicate = function (data, filter: string) {
            return vm.tableFilter.keys.some((key: string) => {
                return JSON.stringify(data[key]).toLowerCase().includes(filter.toLowerCase());
            })
        };

    }

    public applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    public navigateTo(currentItem): void {
        if (this.isNavigationEnabled && currentItem) {
            const { url, property } = this.navigateToObjDetails;
            this.router.navigate([`${url}/${currentItem[property]}`], { state: { data: currentItem } });
        }
    }

    public ngOnChanges(change: SimpleChanges): void {
        if (change && change.displayedColumns) {
            this.columns = change.displayedColumns.currentValue;
        }

        if (change &&
            change.elementData &&
            !change.elementData.firstChange
        ) {
            const currentValue: ICell[] = change.elementData.currentValue;
            this.createTable(currentValue);
        }
    }

}
