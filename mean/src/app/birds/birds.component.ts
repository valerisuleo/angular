import { Component, OnInit } from '@angular/core';

import { BirdsService } from '../services/birds/birds.service';


@Component({
  selector: 'birdsindex',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent implements OnInit {

  allBirds: any[];

  constructor(private service: BirdsService) {}

  ngOnInit() {
    const vm = this;

    vm.service.getAll()
    .subscribe((response) => {
      vm.allBirds = response.json();
      console.log('allBirds', vm.allBirds);
    });
  }
}
