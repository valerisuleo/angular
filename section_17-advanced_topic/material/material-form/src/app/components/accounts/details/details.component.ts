import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

    assignedLicense = 5;

    formModel = {};

    constructor() { }

    handleNameClose(e) {
        if (e) {
            this.formModel['licenceName'] = e.licenceName;
        }
    }

    handleNumberClose(e) {
        if (e) {
            this.formModel['licenceNumber'] = e.licenceNumber;
        }
    }

    save() {
        console.log(this.formModel);
        
    }

    ngOnInit(): void {
    }

}
