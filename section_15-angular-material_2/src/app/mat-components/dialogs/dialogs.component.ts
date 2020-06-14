import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditCourseComponent } from '../../edit-course/edit-course.component';

@Component({
    selector: 'app-dialogs',
    templateUrl: './dialogs.component.html',
    styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit {

    constructor(private dialog: MatDialog) { }

    openDialog() {
        this.dialog.open(EditCourseComponent, {
            data:{
                id: 23
            }
        })
        .afterClosed()
        .subscribe((value) => {
            console.log(value);   
        });
    }

    ngOnInit(): void {
    }

}
