import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers/followers.service';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor(
    private service: FollowersService,
    private route: ActivatedRoute
  ) {}

  allFollowers: any[];

  ngOnInit() {
    const vm = this;

    // here we pass an array of observables
    Observable.combineLatest([
      vm.route.paramMap,
      vm.route.queryParamMap
    ])
    .subscribe((combined) => {
      console.log(combined)
      const page = combined[1].get('page');

      vm.service.getAll()
      .subscribe((response) => {
        vm.allFollowers = response.json();
        console.log('allFollowers', vm.allFollowers);
      });
    })
  }
}
