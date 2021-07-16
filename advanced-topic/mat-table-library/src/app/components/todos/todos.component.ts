import { Component, OnInit } from '@angular/core';
import { ICell, ITodo } from './interface';
import { ITableFilter } from '../../shared/material/material-table/interfaces';
import { Subject } from 'rxjs';
import { TodosService } from './services/todos.service';
import { takeUntil } from 'rxjs/operators';


@Component({
    selector: 'todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

    public columns: string[] = ['completed', 'id', 'title', 'userId', 'action'];
    public dataSource: ICell[] = [];
    public tableFilter: ITableFilter = {
        isFiltering: true,
        keys: ['id', 'title', 'userId']
    };
    private destroyed$: Subject<boolean> = new Subject();

    constructor(private service: TodosService) { }

    private getTodos(): void {
        this.service
            .getCollection()
            .pipe(takeUntil(this.destroyed$))
            .subscribe((response: ITodo[]) => {
                const result = response.map((item) => {
                    return {
                        ...item,
                        action: [
                            { color: 'warn', name: 'delete', icon: 'delete' },
                            { color: 'accent', name: 'edit', icon: 'edit' }
                        ],
                    }
                })
                this.dataSource = this.createCell(Object.keys(result[0]), result, this.setCellProperty);
            });
    }

    private createCell(keys: string[], data: any[], setCellProperty?): ICell[] {
        return data.map((obj) => {
            const cellObj = Object.assign({}, obj);
            keys.map((key) => {
                cellObj[key] = {
                    className: '',
                    value: obj[key],
                    isValueShow: true,
                    isIconShow: false,
                    tooltip: false,
                    icon: '',
                    color: '',
                }
            });
            setCellProperty(cellObj, obj);
            return cellObj;
        });
    }

    private setCellProperty(tableCell, obj): void {
        tableCell.completed.tooltip = true;
        tableCell.completed.isValueShow = false; // hide value
        tableCell.completed.isIconShow = true; // replace with and icon
        tableCell.completed.icon = obj.completed ? 'check_circle' : 'unpublished'; // assing icon
        tableCell.completed.color = obj.completed ? 'primary' : 'warn' // assing color

        tableCell.action.isValueShow = false;
        tableCell.action.isIconShow = true;
        tableCell.action.tooltip = false;
    }

    public handleSort(data): void {
        const { dataSource, sort } = data;
        // sorting nested obj...
        dataSource.sortingDataAccessor = (item, property) => {
            switch (property) {
                case 'completed': return item['completed'].value;
                case 'id': return item['id'].value;
                case 'title': return item['title'].value;
                case 'userId': return item['userId'].value;
                default: return item[property];
            }
        };
        dataSource.sort = sort;
    }

    public ngOnInit(): void {
        this.getTodos();
    }

    public ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }

}
