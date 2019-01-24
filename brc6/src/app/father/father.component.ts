import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  @Output('aliasOutput') change = new EventEmitter();

  constructor() { }

  onClick() {
    console.log('you clicked father!');
    this.change.emit({
      key: 'wow'
    });
  }

  ngOnInit() {
  }

}
