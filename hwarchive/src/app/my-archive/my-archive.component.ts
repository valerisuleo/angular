import { Component, OnInit } from '@angular/core';

import { MyArchiveService } from '../services/my-archive.service';


@Component({
  selector: 'myarchive',
  templateUrl: './my-archive.component.html',
  styleUrls: ['./my-archive.component.css']
})
export class MyArchiveComponent implements OnInit {

  constructor(private service: MyArchiveService) { }

  all: any[];

  ngOnInit() {
    this.all = this.service.getArchive();
  }

}
