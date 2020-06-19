import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { IProduct, ICategory, IListGroup } from '../interfaces';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
    lastPageloaded: number = 0;
    // default apiCalled onload
    apiEndpoint: string = 'vegetables';

    constructor(private service: DataService, private router: Router) { }

    getCategoriesMenu() {
        this.service.getAll('categories')
            .subscribe((response: ICategory[]) => {
                const addCssClass = response.map((item: any) => {
                    return {
                        ...item,
                        cssClass: 'organic'
                    }
                });
                this.listGroup = { list: addCssClass, key: 'categoryName' };
            })
    }

    handleSelectedLi(obj: ICategory) {
        this.products = [];
        this.lastPageloaded = 0;
        const currentCategory = obj.categoryName.toLowerCase();
        this.apiEndpoint = currentCategory;
        this.getCollection();
    }

    navigateTo(currentProduct: IProduct) {
        const endPoint = currentProduct.category.toLowerCase();
        this.router.navigate([`/products/${currentProduct.id}`], { state: { data: currentProduct } });
    }

    getCollection() {
        this.subscription = this.service
            .getCollectionPaginated(this.apiEndpoint, 'seqN', "asc", this.lastPageloaded, 3)
            .subscribe((response: any) => {
                response.forEach((element) => {
                    element.count = 0;
                    element.isOpen = false;
                    this.products.push(element);
                });
            });
    }

    loadmore() {
        this.lastPageloaded = this.lastPageloaded + 1;
        this.getCollection();
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
            current.isOpen = false;
        }
    }

    ngOnInit(): void {
        this.getCategoriesMenu();
        this.getCollection();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
