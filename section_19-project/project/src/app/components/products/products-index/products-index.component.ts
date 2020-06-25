import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { IProduct, ICategoryMenu, IListGroup, ICategory } from '../interfaces';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'products-index',
    templateUrl: './products-index.component.html',
    styleUrls: ['./products-index.component.scss']
})
export class ProductsIndexComponent implements OnInit, OnDestroy {

    public subscription: Subscription;
    public listGroup: IListGroup;
    public products: IProduct[] = [];
    public categories: ICategoryMenu[] = [];
    public lastPageloaded: number = 0;
    public collectionSize: number = 6;
    public page: number = 1;
    public pageSize: number = 3;
    // default apiCalled onload
    public apiEndpoint: string;

    constructor(private service: DataService, private router: Router) { }

    getCategoriesMenu(): void {
        this.service.getAll('categories')
            .subscribe((response: ICategoryMenu[]) => {

                const defaultCategory: ICategoryMenu = this.getDefaultCollection(response, 'categoryName', 'Bread');
                const { id, categoryName } = defaultCategory;
                this.apiEndpoint = this.pathMaker(categoryName, id);
                this.getCollection();

                const addCssClass = response.map((item: any) => {
                    return {
                        ...item,
                        cssClass: 'organic'
                    }
                });
                this.listGroup = { list: addCssClass, key: 'categoryName' };
            })
    }

    getDefaultCollection(array: ICategoryMenu[], key: string, string): ICategoryMenu {
        return array.find((obj) => {
            return obj[key] === string;
        });
    }

    pathMaker(string, id: string): string {
        const subPath: string = string.replace(/ /g, '').toLowerCase();
        return `categories/${id}/${subPath}`;
    }

    handleSelectedLi(obj: ICategoryMenu): void {
        // reset
        this.products = [];
        this.lastPageloaded = 0;
        //
        const { id, categoryName, collectionSize } = obj;
        this.apiEndpoint = this.pathMaker(categoryName, id)
        this.collectionSize = collectionSize;
        this.getCollection();
    }

    navigateTo(currentProduct: IProduct) {
        this.router.navigate([`/products/${currentProduct.id}`], { state: { data: currentProduct } });
    }

    // _________________________HANDLE PAGINATION_________________________

    getCollection(): void {
        this.subscription = this.service
            .getCollectionPaginated(this.apiEndpoint, 'seqN', "asc", this.lastPageloaded, 3)
            .subscribe((response: any) => {
                response.forEach((element) => {
                    element.count = 0;
                    element.isOpen = false;
                });
                this.products = response;
            });
    }

    handlePageChange(currentPage): void {
        this.lastPageloaded = currentPage - 1;
        this.getCollection();
    }

    handlePagination(e): void {
        const next: string = 'Next';
        const previous: string = 'Previous';
        const current: HTMLElement = e.target;

        if (current.getAttribute("aria-label") === next ||
            current.parentElement.getAttribute("aria-label") === next) {
            this.getNextSetOfItems();
        }

        if (current.getAttribute("aria-label") === previous ||
            current.parentElement.getAttribute("aria-label") === previous) {
            this.getPreviousSetOfItems();
        }
    }

    getNextSetOfItems(): void {
        this.lastPageloaded = this.lastPageloaded + 1;
        this.getCollection();
    }

    getPreviousSetOfItems(): void {
        this.lastPageloaded = this.lastPageloaded - 1;
        this.getCollection();
    }

    // _________________________HANDLE COUNTERS_________________________
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
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }



}
