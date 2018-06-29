import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { FollowersService } from '../services/followers/followers.service';


@Component({
  selector: 'follower-show',
  templateUrl: './follower-show.component.html',
  styleUrls: ['./follower-show.component.css']
})
export class FollowerShowComponent implements OnInit  {

  constructor(private route: ActivatedRoute, private service: FollowersService) {}

  follower = {};

  tutti = function() {

    this.service.getAll()
    .subscribe((response) => {
        return response.json();
      });
    }

   getFollower () {
     console.log(this.tutti())
  }

  ngOnInit() {
    this.getFollower();
  }
}




// import { Component, OnInit } from '@angular/core';
//
// import { ActivatedRoute } from '@angular/router';
// import { FollowersService } from '../services/followers/followers.service';
//
// @Component({
//   selector: 'follower-show',
//   templateUrl: './follower-show.component.html',
//   styleUrls: ['./follower-show.component.css']
// })
// export class FollowerShowComponent implements OnInit  {
//
//   constructor(
//     private route: ActivatedRoute,
//     private service: FollowersService
//   ) { }
//
//   follower = {};
//
//   getFollower() {
//     const vm = this;
//     const id = vm.route.snapshot.paramMap.get('id');
//
//     vm.service.get(id)
//     .subscribe((response) => {
//       vm.follower = response.json();
//     });
//   }
//
//   ngOnInit() {
//     const vm = this;
//
//     vm.getFollower();
//     console.log(vm);
//   }
// }
