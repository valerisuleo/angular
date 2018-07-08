import { Component, OnInit } from '@angular/core';

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

  onFavoriteChanged() {
    console.log('favorite has been clicked!');
  }

  ngOnInit() {
  }

}
