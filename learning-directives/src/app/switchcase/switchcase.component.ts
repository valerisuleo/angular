import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'switchcase',
  templateUrl: './switchcase.component.html',
  styleUrls: ['./switchcase.component.css']
})
export class SwitchcaseComponent implements OnInit {

  viewMode = 'map';

  constructor() { }

  ngOnInit() {
  }

}
