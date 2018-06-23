import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent {

  all: any[];

  constructor( http: Http) {

    const vm = this;

    http.get('https://api.github.com/users/valeriorisuleo/followers')
    .subscribe((response) => {
        vm.all = response.json();
        console.log('all', vm.all);
      });
    }
  }
