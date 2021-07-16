import { Component, OnInit } from '@angular/core';
import { DonutService } from '../../../services/donut.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    donut$: Observable<any>

    constructor(private service: DonutService) { }

    donutsIndex() {
        this.donut$ = this.service.getCollection();
        console.log(this.donut$);
        
    }

    // donutShow() {
    //     this.service.getItem(3)
    //     .subscribe((res) => {
    //         console.log(res);
    //     })
    // }

    ngOnInit(): void {
        this.donutsIndex();
        // this.donutShow();
    }

}
