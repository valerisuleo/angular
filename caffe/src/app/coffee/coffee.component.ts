import { Component, OnInit } from '@angular/core';
import { FakequeryService } from '../fakequery.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {
  coffeeList;

  constructor(service: FakequeryService) {
    this.coffeeList = service.getCoffee();
    console.log(this.coffeeList)
   }

    onKeyUp(caffe) {
    console.log(caffe);
  }

  ngOnInit() {
  }

}
