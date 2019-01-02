import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routerTransition } from '.././router.animations';
import { BirdsService } from '.././services/birds/birds.service';
@Component({
  selector: 'app-birds-list',
  templateUrl: './birds-list.component.html',
  styleUrls: ['./birds-list.component.scss']
})
export class BirdsListComponent implements OnInit {

  all = [];

  constructor( public service: BirdsService) { }

  ngOnInit() {
    const vm = this;

    vm.service.getAll()
    .then((response) => {
      vm.all = response;
      console.log(vm.all);
    });
  }
}
