import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BirdsService } from '../services/birds/birds.service';


@Component({
  selector: 'birds-show',
  templateUrl: './birds-show.component.html',
  styleUrls: ['./birds-show.component.scss']
})
export class BirdsShowComponent implements OnInit {

  bird = {};

  constructor(
    private route: ActivatedRoute,
    private service: BirdsService,
  ) { }

  getBird() {
    const vm = this;
    const id = vm.route.snapshot.paramMap.get('id');

    vm.service.get(id)
    .subscribe((response) => {
      vm.bird = response.json();
    });
  }

  ngOnInit() {
    const vm = this;

    vm.getBird();
    console.log(vm);
  }
}
