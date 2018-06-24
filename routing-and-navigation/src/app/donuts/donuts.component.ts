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

// GET DONUTS
  ngOnInit() {
  const vm = this;

  vm.service.getAll()
  .subscribe((response) => {
      vm.allDonuts = response.json();
      console.log('allDonuts', vm.allDonuts);
    });
  }
}
