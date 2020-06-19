import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces';
import { BootstrapFormComponent } from '../../../reusable-components/bootstrap-form/bootstrap-form.component';
import formTemplate from './form-template';

@Component({
    selector: 'products-show',
    templateUrl: './products-show.component.html',
    styleUrls: ['./products-show.component.scss']
})
export class ProductsShowComponent extends BootstrapFormComponent implements OnInit {

    constructor() { 
        super()
    }

    product: IProduct;

    productDetail() {
        const { data } = history.state;
        if (data) {
            localStorage.setItem('product', JSON.stringify(data));
            this.product = data;
        } else {
            // this will prevent a blank page on refresh
            const fetchDataFromLocalStorage = JSON.parse(localStorage.getItem('product'));
            this.product = fetchDataFromLocalStorage;
        }
        console.log(this.product);
        // this.productEdit(this.product)
    }

    productEdit(product: IProduct) {
        console.log(product);
        this.formGroup.setValue({
            title: product.title,
            imageUrl: product.imageUrl,
            price: product.price,
            categories: product.categories,
            // category: product.category
        })

    }

    handleSubmit(isSubmitted: boolean) {
        const { value } = this.formGroup;
        console.log(value)
        
    }

    ngOnInit(): void {
        this.formMaker(formTemplate);
        this.productDetail();
    }


}
