import { Component, OnInit } from '@angular/core';

import { AuthorsService } from '../authors.service'


@Component({
  selector: 'app-poeti',
  templateUrl: './poeti.component.html',
  styleUrls: ['./poeti.component.css']
})

export class PoetiComponent implements OnInit {

  title = 'Here a list of my favourite authors';


  arrayOfAuthors;

  constructor(service: AuthorsService) {
    this.arrayOfAuthors = service.getAuthors();
  }

  isOpen = false;

// 02. Here we add our event
  onSave() {
    console.log('uhhhh you clicked me!');
    this.isOpen = !this.isOpen;
  }


// STOP EVENT BUBBLING
  // onSave($event) {
  // $event.stopPropagation();
  //   console.log('uhhhh you clicked me!', $event);
  // }

  // onDivClick() {
  //   console.log('hey I am the onDivClick!');
  // }


  getTitle(){
    return this.title;
  }

  ngOnInit() {
  }

}
