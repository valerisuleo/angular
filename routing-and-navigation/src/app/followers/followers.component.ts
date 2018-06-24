import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers/followers.service';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor( private service: FollowersService) {}

  allFollowers: any[];

  ngOnInit() {
    const vm = this;

    vm.service.getAll()
    .subscribe((response) => {
      vm.allFollowers = response.json();
      console.log('allFollowers', vm.allFollowers);
    });
  }
}
