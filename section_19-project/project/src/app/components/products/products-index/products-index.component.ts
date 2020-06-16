import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { IProduct, ICategory, IListGroup } from '../interfaces';
import { Subscription } from 'rxjs';

@Component({
    selector: 'products-index',
    templateUrl: './products-index.component.html',
    styleUrls: ['./products-index.component.scss']
})
export class ProductsIndexComponent implements OnInit, OnDestroy {

    subscription: Subscription;
    listGroup: IListGroup;
    products: IProduct[] = [];
    categories: ICategory[] = [];


    constructor(private service: DataService) { }

    getCollection() {
        this.subscription = this.service.getAll('vegetables')
            .subscribe((response: any) => {
                this.products = response;
                this.extractCategories(this.products);
            });
    }

    extractCategories(data: IProduct[]) {
        const { categories } = data[0];
        const remap: ICategory[] = categories.map((item: string) => {
            return {
                categoryName: item,
                isSelected: false
            }
        });
        this.listGroup = { list: remap, key: 'categoryName'};
    }


    ngOnInit(): void {
        this.getCollection();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
