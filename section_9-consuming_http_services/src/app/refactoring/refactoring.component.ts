import { Component, OnInit } from '@angular/core';
import { DonutsService } from '../services/donuts.service';



@Component({
  selector: 'refactoring',
  templateUrl: './refactoring.component.html',
  styleUrls: ['./refactoring.component.css']
})
export class RefactoringComponent implements OnInit {

  all: any[];
  newDonut= {};

  constructor(private service: DonutsService) { }

// GET DONUTS
  ngOnInit() {
  const vm = this;

  vm.service.getAll()
  .subscribe((response) => {
      vm.all = response.json();
      // console.log('all', vm.all);
    });
  }


// CREATE DONUT
  addDonut(donutform) {
  const vm = this;

    vm.newDonut = donutform.value;
    vm.service.create(vm.newDonut)
    .subscribe((response) => {
      vm.newDonut['id'] = response.json().id;
      vm.all.push(vm.newDonut);
      console.log('vm.all', vm.all)
    });
    donutform.reset();
  }


// UPDATE DONUT
  editDonut(donut) {
    const vm = this;

    vm.service.update(donut)
    .subscribe((response) => {
      console.log(response.json());
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
