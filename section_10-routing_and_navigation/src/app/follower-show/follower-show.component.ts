import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FollowersService } from '../services/followers/followers.service';


@Component({
  selector: 'follower-show',
  templateUrl: './follower-show.component.html',
  styleUrls: ['./follower-show.component.css']
})
export class FollowerShowComponent implements OnInit  {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FollowersService
  ) { }

  all: any[];
  follower = {};
  followerParams = +this.route.snapshot.paramMap.get('id');


  submit() {
    const vm = this;

    vm.router.navigate(['/users'], {
      queryParams: {page: 1, order: 'newest'}
    });
  }


  showFollower() {
    const vm = this;

    return vm.service.getAll()
    .then((response) => {
      vm.all = response;
      return vm.all.find((follower) => {
        return follower.id === vm.followerParams;
      })
    });
  }

// The first time I've called the showFollower() it returned 'undefined'.
// It's because the console is faster than the result from the service.
// In order to see what showFollower() returns, we need a promise.

  ngOnInit() {
    const vm = this;

    vm.showFollower()
    .then((response) => {
      // console.log(response);
      vm.follower = response;
    });
    console.log(vm);
  }
}
