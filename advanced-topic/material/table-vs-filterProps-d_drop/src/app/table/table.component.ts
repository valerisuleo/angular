import { SelectionModel } from '@angular/cdk/collections';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import dummy from './dummy';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
    @ViewChild(CdkVirtualScrollViewport) public virtualScroll: CdkVirtualScrollViewport;
    public selection = new SelectionModel<any>(true, []);
    private sort: MatSort;
    @ViewChild(MatSort) set matSort(ms: MatSort) {
        this.sort = ms;
    }

    nextBatch: { userId: number; id: number; title: string; body: string; }[];
    firstBatch: { userId: number; id: number; title: string; body: string; }[];
    dataSource;
    isVisible = false;
    default = 'col-md-12 col-lg-10';
    fluid = 'col';

    columns: string[] = [
        'userId',
        'id',
        'title',
        'body',
        'actions',
    ];

    columnsMenu = [
        {
            name: 'userId',
            isChecked: true
        },
        {
            name: 'id',
            isChecked: true
        },
        {
            name: 'title',
            isChecked: true
        },
        {
            name: 'body',
            isChecked: true
        },
        {
            name: 'actions',
            isChecked: true
        },
    ];



    constructor() { }


    // _____________________________________TABLE_____________________________________

    createTable() {
        const result = this.addActions(this.firstBatch);
        this.dataSource = new TableVirtualScrollDataSource(result);
        // console.log(this.dataSource);
    }

    private addActions(batch) {
        const actions = [
            { label: 'edit', icon: 'mode_edit' },
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

    // ________________________________SORT AND FILTER________________________________
    setDataSourceAttributes() {
        this.dataSource.sort = this.sort;
    }

    filterGlobal(string: string) {
        let inputValue = string.trim();
        inputValue = string.toLowerCase();
        this.dataSource.filter = inputValue;
    }

    drop(event: CdkDragDrop<any[]>) {
        moveItemInArray(this.columns, event.previousIndex, event.currentIndex);

        moveItemInArray(this.columnsMenu, event.previousIndex, event.currentIndex);
        console.log(this.columnsMenu);
    }

    toggleCol(current) {
        let result = [];
        current.isChecked = !current.isChecked;

        if (!current.isChecked) {
            result = this.columns.filter(item => item !== current.name);
            this.columns = result;
        } else {
            const index = this.columnsMenu.indexOf(current);
            this.columns.splice(index, 0, current.name);
        }
    }

    // ____________________________________CRUD____________________________________
    postDelete(current) {
        const clone = [...this.dataSource.data];
        const index = clone.indexOf(current);
        clone.splice(index, 1);
        // updating the view
        this.dataSource.data = clone;
    }

    // __________________________________L.C.HOOKS__________________________________
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
