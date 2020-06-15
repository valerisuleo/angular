import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { IProduct } from '../interfaces';
import { Subscription } from 'rxjs';

@Component({
    selector: 'products-index',
    templateUrl: './products-index.component.html',
    styleUrls: ['./products-index.component.scss']
})
export class ProductsIndexComponent implements OnInit, OnDestroy {

    products: IProduct[] = [];
    subscription: Subscription;

    constructor(private service: DataService) { }

    getCollection() {
        this.subscription = this.service.getAll('vegetables')
            .subscribe((response: any) => {
                console.log(response);
                
                this.products = response;
            });
    }

    ngOnInit(): void {
        this.getCollection();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
