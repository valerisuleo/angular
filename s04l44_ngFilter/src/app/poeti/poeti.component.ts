import { Component, OnInit } from '@angular/core';

import { AuthorsService } from '../authors.service'


@Component({
  selector: 'app-poeti',
  templateUrl: './poeti.component.html',
  styleUrls: ['./poeti.component.css']
})

export class PoetiComponent implements OnInit {

  title = 'Here a list of my favourite coffee';


  arrayOfCoffee;

  constructor(service: AuthorsService) {
    this.arrayOfCoffee = service.getAuthors();
    console.log(this.arrayOfCoffee)
  }

  isOpen = false;

  onClick() {
    console.log('uhhhh you clicked me!');
    this.isOpen = !this.isOpen;
  }

  onKeyUp(email) {
    console.log(email);
  }
  // onKeyUp($event) {
  //   console.log('enter pls')
  // }


  getTitle(){
    return this.title;
  }

  ngOnInit() {
  }

}
