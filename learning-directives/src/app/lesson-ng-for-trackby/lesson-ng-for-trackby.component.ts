import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lesson-ng-for-trackby',
  templateUrl: './lesson-ng-for-trackby.component.html',
  styleUrls: ['./lesson-ng-for-trackby.component.css']
})
export class LessonNgForTrackbyComponent {

  items;

  // loadItems() {
  //   this.items = [
  //     { task: 'learn angular', done: false },
  //     { task: 'buy toilet paper', done: false },
  //     { task: 'clean dishes', done: false }
  //   ];
  // }

  loadItems() {
    this.items = [
      { task: 'learn angular', done: false },
      { task: 'buy toilet paper', done: false },
      { task: 'clean dishes', done: false }
    ];
  }
  trackItem(index, item) {
    return item ? item.id : undefined;
  }
}
