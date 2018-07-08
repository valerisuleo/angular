import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('hakunamatata') isFavorite: boolean;
  @Output() change = new EventEmitter();

  constructor() { }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({
      newValue: this.isFavorite
    });
  }

  ngOnInit() {
  }
}

export interface FavoriteInterface {
  newValue: boolean
}
