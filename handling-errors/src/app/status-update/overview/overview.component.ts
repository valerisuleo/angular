import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service'

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  all = [];
  currentSelected: any;

  constructor(
    private overviewService: PostsService
  ) { }


  getStatus() {
    const vm = this;

    vm.overviewService.getAll()
    .subscribe((response) => {
      vm.all = response;
      vm.currentSelected = vm.findTruthy().stato;
      vm.overviewService.resfreshContent(vm.currentSelected);
    });
  }

  findTruthy() {
    const vm = this;
    return vm.all.find((item) => {
      return item.selected === true;
    });
  }

  everybodyisFalse() {
    const vm = this;

    vm.all.forEach((item) => {
      item.selected = false;
      vm.overviewService.update(item)
      .subscribe((response) => {
      });
    });
  }

  statusUpdate(item) {
    const vm = this;
    const current = item;
    vm.everybodyisFalse();

    current.selected = true;
    vm.overviewService.update(current)
    .subscribe((response) => {
      vm.overviewService.resfreshContent(current.stato);
    });
  }

  ngOnInit() {
    const vm = this;
    // vm.getStatus();
  }

}
