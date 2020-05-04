import { Component, OnInit } from '@angular/core';
import { FormClass } from './form-model';
import { Http } from '@angular/http';

@Component({
    selector: 'app-angular-ng-class',
    templateUrl: './angular-ng-class.component.html',
    styleUrls: ['./angular-ng-class.component.scss']
})
export class AngularNgClassComponent implements OnInit {

    all = [];
    captionValues: any[];
    private url = 'https://ga-doughnuts.herokuapp.com/doughnuts';

    constructor(private formModel: FormClass, private http: Http) { }

    donut = this.formModel;



    donutsCreate() {
        const newDonut = { ...this.donut };
        this.all.push(newDonut);
        // clear form
        this.donut = { flavor: '', size: '' };
    }
    // ____________________________ngClass with Giacomo____________________________

    // removeFlavourProperty(array) {
    //     return array.map((item) => {
    //         return {
    //             id: item.id,
    //             style: item.style,
    //         }
    //     });
    // }

    // getCaptionValues(array) {
    //     return array.map((item) => {
    //         let noSpaces = item.flavour.replace(/\s/g, '-');
    //         return noSpaces.toLowerCase();
    //     });
    // }

    // addKeys(array) {
    //     return array.map((donutObj) => {
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

    // donutsIndex() {
    //     this.http.get(this.url)
    //         .subscribe((data) => {
    //             const response = data.json()
    //             this.all = this.removeFlavourProperty(response);
    //             this.captionValues = this.getCaptionValues(response);
    //             this.all = this.addKeys(this.all);
    //             console.log(this.all);
    //         });
    // }

    ngOnInit(): void {
        // this.donutsIndex();
    }

}
