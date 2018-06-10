import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hidden-property',
  templateUrl: './hidden-property.component.html',
  styleUrls: ['./hidden-property.component.css']
})
export class HiddenPropertyComponent implements OnInit {

  courses = [1,2];
  // courses = [];


  constructor() { }

  ngOnInit() {
  }

}
