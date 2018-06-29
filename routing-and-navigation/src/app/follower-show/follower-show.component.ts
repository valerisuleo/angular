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

  data: any[];

  allMyFollowers = function() {
  return this.service.getAll()
    .then((response) => {
      return response.json();
    })
  }


  getFollower() {
    const vm = this;
    const followerId = +vm.route.snapshot.paramMap.get('id');
    console.log(followerId);

    vm.allMyFollowers()
    .then((response) => {
       vm.data = response;
       return vm.data.find((follower) => {
         return follower.id === followerId;
       })
    });
  }

  ngOnInit() {
    const vm = this;

    vm.getFollower();
    console.log('vm', vm);
  }
}
