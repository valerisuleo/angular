import { SelectionModel } from '@angular/cdk/collections';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import dummy from './dummy';


@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
    @ViewChild(CdkVirtualScrollViewport) virtualScroll: CdkVirtualScrollViewport;

    selection = new SelectionModel<any>(true, []);

    private sort: MatSort;


    @ViewChild(MatSort) set matSort(ms: MatSort) {
        this.sort = ms;
    }




    dataSource;
    displayedColumns: string[] = [
        'userId',
        'id',
        'title',
        'body',
        'actions',
    ];
    nextBatch: { userId: number; id: number; title: string; body: string; }[];
    firstBatch: { userId: number; id: number; title: string; body: string; }[];

    constructor() {

    }

    setDataSourceAttributes() {
        this.dataSource.sort = this.sort;
    }

    // // ____________________________CHECKBOX____________________________
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach((row) => {
                this.selection.select(row)
            });
    }

    checkboxLabel(row?): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }

    // // __________________________FILTER & TABLE__________________________
    filterGlobal(string: string) {
        let inputValue = string.trim();
        inputValue = string.toLowerCase();
        this.dataSource.filter = inputValue;
    }

    createTable() {
        const result = this.addActions(this.firstBatch);
        this.dataSource = new TableVirtualScrollDataSource(result);
        console.log(this.dataSource);
    }


    postDelete(current) {
        const clone = [...this.dataSource.data];
        const index = clone.indexOf(current);
        clone.splice(index, 1);
        // updating the view
        this.dataSource.data = clone;
    }

    private addActions(batch) {
        const actions = [
            // { label: 'edit', icon: 'mode_edit' },
            { label: 'delete', icon: 'delete' }
        ];
        const result = batch.map((item) => {
            return {
                ...item,
                actions
            };
        });
        return result;
    }

    ngOnInit(): void {
        this.firstBatch = dummy.splice(0, 50);
        this.nextBatch = dummy;
        this.createTable();
    }

    ngAfterViewInit() {
        this.setDataSourceAttributes();

        this.virtualScroll
            .elementScrolled()
            .subscribe(() => {
                const end = this.virtualScroll.getRenderedRange().end;
                if (this.dataSource.data.length === end) {
                    this.nextBatch = this.addActions(this.nextBatch);
                    // API call...
                    setTimeout(() => {
                        const clone = [...this.dataSource.data];
                        this.nextBatch.forEach(item => clone.push(item));
                        this.dataSource.data = [...new Set(clone)];
                    }, 2500);
                }
            });
    }

}
