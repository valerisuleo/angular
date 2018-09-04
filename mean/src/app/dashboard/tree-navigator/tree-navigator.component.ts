import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'tree-navigator',
  templateUrl: './tree-navigator.component.html',
  styleUrls: ['./tree-navigator.component.scss']
})
export class TreeNavigatorComponent implements OnInit {

  activities = [
    {
      id:"1",
      name:"folder",
      channel:[
        {
          id:"4",
          name:"folder-inside",
          documents:[
            {
              id:"8",
              name:"file"
            }
          ]
        }
      ]
    }
  ]

  isOpen: boolean;

  constructor() { }


  toggleTree() {
    console.log('wow');
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
    this.isOpen = true;
  }
}
