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

                const addCounter = response.map((item) => {
                    return {
                        ...item,
                        count: 1,
                        isOpen:false
                    }
                });
                this.products = addCounter;
                this.extractCategories(this.products);
            });
    }

    extractCategories(data: IProduct[]) {
        const { categories } = data[0];
        const remap: ICategory[] = categories.map((item: string) => {
            return {
                categoryName: item,
                isActive: false,
                cssClass: 'organic'
            }
        });
        this.listGroup = { list: remap, key: 'categoryName' };
    }

    counterShow(current: IProduct) {
        current.isOpen = true;
    }


    addItem(current: IProduct) {
        const index = this.products.indexOf(current);
        current.count = current.count + 1;
        this.products[index] = current;
    }

    removeItem(current: IProduct) {
        if (current.count >= 1) {
            const index = this.products.indexOf(current);
            current.count = current.count - 1;
            this.products[index] = current;
        }
        if (current.count === 0) {
            // hide counter
            current.isOpen = false;
        }

    }

    ngOnInit(): void {
        this.getCollection();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
