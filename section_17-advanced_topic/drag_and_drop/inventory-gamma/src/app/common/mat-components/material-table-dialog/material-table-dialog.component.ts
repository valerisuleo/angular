import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'material-table-dialog',
    templateUrl: './material-table-dialog.component.html',
    styleUrls: ['./material-table-dialog.component.scss']
})
export class MaterialTableDialogComponent implements OnInit {

    columns: string[];
    dataSource;


    constructor(@Inject(MAT_DIALOG_DATA) data: any, private router: Router) {
        const { dataSource, columns } = data;
        this.dataSource = new MatTableDataSource(dataSource);
        this.columns = columns;
    }


    getCol(col, element) {
        if (col == 'model') {
            this.router.navigate([`devices/${element.id}`]);
        }
    }

    ngOnInit(): void {
    }

}
