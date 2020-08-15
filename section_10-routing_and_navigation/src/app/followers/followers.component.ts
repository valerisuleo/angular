import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers/followers.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor(private service: FollowersService) {}

  allFollowers: any[];

  ngOnInit() {
    const vm = this;

    vm.service.getAll()
    .then((response) => {
      vm.allFollowers = response;
      console.log('allFollowers', vm.allFollowers);
    });
  }
}
