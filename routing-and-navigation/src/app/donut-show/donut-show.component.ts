import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DonutsService } from '../services/donuts/donuts.service';

@Component({
  selector: 'donut-show',
  templateUrl: './donut-show.component.html',
  styleUrls: ['./donut-show.component.css']
})
export class DonutShowComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: DonutsService
  ) { }

  donut = {};

  showDonut() {
    const vm = this;
    const id = vm.route.snapshot.paramMap.get('id');

    vm.service.get(id)
    .subscribe((response) => {
      vm.donut = response;
    });
  }

  ngOnInit() {
    const vm = this;

    vm.showDonut();
    console.log(vm);
  }
}
