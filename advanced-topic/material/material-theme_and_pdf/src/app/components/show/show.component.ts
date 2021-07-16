import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

    url = "https://cors-anywhere.herokuapp.com/http://www.v-quadro.it/coddio.pdf";
    
    zoomValue = 1;
    rotationValue = 0;
    fitPage = true;


    constructor() { }

    zoomIn() {
        this.zoomValue = this.zoomValue + 0.5;
    }

    zoomOut() {
        if (this.zoomValue > 0.5) {
            this.zoomValue = this.zoomValue - 0.5;
            console.log(this.zoomValue);
        }
    }

    rotate() {
        this.rotationValue = this.rotationValue + 90;
    }

    fit() {
        this.fitPage = false;
    }

    ngOnInit(): void {
    }

}
