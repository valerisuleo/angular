import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
    selector: 'donuts',
    templateUrl: './donuts.component.html',
    styleUrls: ['./donuts.component.scss']
})
export class DonutsComponent implements OnInit {

    private url = 'https://ga-doughnuts.herokuapp.com/doughnuts';

    all: any[];
    newAll = [];
    captionValues = [];

    donut = {};

    constructor(private http: Http) { }

    getAll() {
        this.http.get(this.url)
            .subscribe((response) => {
                this.all = response.json().slice(0, 4);
                this.getCaptionValues();
                this.newAll = this.removeFlavourProperty().slice(0, 4);
                this.addKeys();
                // setTimeout(this.triggerRemoveChocolate.bind(this), 5000)
            });

    }


    getCaptionValues() {
        this.captionValues = this.all.map((item) => {
            let noSpaces = item.flavour.replace(/\s/g, '-');
            return noSpaces.toLowerCase();
        })
    }

    // 1. After we receive the response we remove the flavor property as test to see if we can readded it...
    removeFlavourProperty() {
        return this.all.map((item) => {
            return {
                id: item.id,
                style: item.style,
            }
        })
    }

    // addKeys() {
    //     console.log('this.newAll before', this.newAll);
    //     this.newAll = this.newAll.map((donutObj) => {
    //         const obj = {
    //             ...donutObj,
    //             classes: []
    //         }

    //         this.captionValues.forEach((el, i) => {
    //             obj.classes.push({
    //                 flavor: el,
    //                 index: i
    //             });
    //         });

    //         return obj;
    //     });
    // }

    // REFACTORING...
    addKeys() {
        this.newAll.forEach((donutObj) => {
            // we add a new key 'classes' to { id: number, style: string} which will be an [{flavor: "chocolate", index: 0}]
            donutObj.classes = this.captionValues.map((flavor, i) => {
                return {
                    flavor,
                    index: i
                }
            });
        })
    }

    // triggerRemoveChocolate() {
    //     this.newAll.forEach(item => item.classes = [item.classes[0]]);

    // }

    ngOnInit() {
        this.getAll();
    }

}




