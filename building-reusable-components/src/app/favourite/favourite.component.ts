// import { Component, OnInit } from '@angular/core';

// import { Component, OnInit, Input } from '@angular/core';

// 1. Output/event
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input('is-favourite') // aliasing input properties
  isFavourite = false;
  // Now the star is dark because in the api.component I've set the isFavourite property in the post object to true.


// 2. Output/event
  @Output()
  change = new EventEmitter();

  onClick(){

    const vm = this;

    vm.isFavourite = !vm.isFavourite;
    // vm.stars();


// 3. Output/event
    // vm.change.emit();

    // we pass now an object...
    vm.change.emit({newValue: vm.isFavourite});

  }

  constructor() { }

  ngOnInit() {
    // this.stars();
  }
  // stars() {
  //   const fullstar = document.getElementById('asso');
  //   this.isFavourite ?
  //   fullstar.className = 'glyphicon glyphicon-star' :
  //   fullstar.className = 'glyphicon glyphicon-star-empty';
  // }
}

export interface passObjToFavouriteChanged {
  newValue: boolean;
}
