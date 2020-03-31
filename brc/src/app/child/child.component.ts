import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  onFavoriteChanged() {
      console.log('favorite has been clicked!');
    }

  ngOnInit() {
  }

}
