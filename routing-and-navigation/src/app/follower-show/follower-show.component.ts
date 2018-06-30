import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { FollowersService } from '../services/followers/followers.service';


@Component({
  selector: 'follower-show',
  templateUrl: './follower-show.component.html',
  styleUrls: ['./follower-show.component.css']
})
export class FollowerShowComponent implements OnInit  {

  constructor(
    private route: ActivatedRoute,
    private service: FollowersService
  ) { }

  follower = {};
  all: any[];
  followerParams = +this.route.snapshot.paramMap.get('id');


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

  ngOnInit() {
    const vm = this;

    vm.showFollower()
    .then((response) => {
      vm.follower = response;
    });
    console.log('vm', vm);
  }
}
