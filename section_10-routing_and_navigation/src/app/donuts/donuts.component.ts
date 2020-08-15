import { Component, OnInit } from '@angular/core';
import { DonutsService } from '../services/donuts/donuts.service';

@Component({
  selector: 'donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {

  constructor(private service: DonutsService) { }

  allDonuts: any[];

  ngOnInit() {
  const vm = this;

  vm.service.getAll()
  .then((response) => {
      vm.allDonuts = response;
      console.log('allDonuts', vm.allDonuts);
    });
  }
}
