import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service'

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  currentSelected: any;

  constructor(
    private overviewService: PostsService
  ) {
    this.overviewService.currentSelectedChanged
    .subscribe((args: any) => {
      this.getData(args);
    });
  }

  getData(data) {
    console.log('data', data);
    this.currentSelected = data;
  }

  riclassifica() {
    console.log('wow you click me!');
  }

  ngOnInit() {
  }
}
