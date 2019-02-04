import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {

  constructor() { }


  sendingData = {
    greetings: 'hello world'
  }

  ngOnInit() {
  }

}
