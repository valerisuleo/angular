import { Component, OnInit } from '@angular/core';
import { DonutsService } from '../services/donuts.service';

@Component({
  selector: 'mapoperator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.css']
})
export class MapOperatorComponent implements OnInit {

  all: any[];
  newDonut= {};

  constructor(private service: DonutsService) { }


  // 1. What we Wanna do here is to get an array of objects instead of the data object and then apply on it the Json method. let's go to the data.service.ts

  // 4. let's make our code  cleaner

  // GET DONUTS
    ngOnInit() {
    const vm = this;
    vm.service.getAll()
    .subscribe(data => vm.all = data);
    }


// CREATE DONUT
  addDonut(donutform) {
  const vm = this;

    vm.newDonut = donutform.value;
    vm.service.create(vm.newDonut)
    .subscribe((data) => {
      vm.newDonut['id'] = data.id;
      vm.all.push(vm.newDonut);
      console.log('vm.all', vm.all)
    });
    donutform.reset();
  }


// UPDATE DONUT
  editDonut(donut) {
    const vm = this;

    vm.service.update(donut)
    .subscribe((data) => {
      console.log(data);
    });
  }


// DELETE DONUT
  eraseDonut(donut) {
    const vm = this;

    vm.service.delete(donut)
    .subscribe(() => {
      let donutIndex = vm.all.indexOf(donut);
      vm.all.splice(donutIndex, 1);
    });
  }

}
