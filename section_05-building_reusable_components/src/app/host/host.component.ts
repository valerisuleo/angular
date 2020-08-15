import { Component, OnInit } from '@angular/core';

import { FavoriteInterface } from '../favorite/favorite.component';


@Component({
  selector: 'host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  constructor() { }

    post = {
    title: 'title',
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FavoriteInterface) {
    console.log('newValueObj', eventArgs);
  }

  ngOnInit() {
  }
}
