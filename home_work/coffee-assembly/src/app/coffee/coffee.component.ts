import { Component, OnInit } from '@angular/core';
import { FakequeryService } from '../fakequery.service';


@Component({
  selector: 'coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss'],
})
export class CoffeeComponent {
  coffeeList;

  constructor(service: FakequeryService) {
    this.coffeeList = service.getCoffee();
    console.log(this.coffeeList);
   }
}
