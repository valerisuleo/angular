
// 01 Here we import our component
import { Component, OnInit } from '@angular/core';

import { AuthorsService } from '../authors.service'

@Component({
  selector: 'app-poeti',
  templateUrl: './poeti.component.html',
  styleUrls: ['./poeti.component.css']
})


// 02 We create our class and export it into our module.
export class PoetiComponent implements OnInit {
  title = 'Here a list of my favourite authors';

  arrayOfAuthors;

  constructor(service: AuthorsService) {
    this.arrayOfAuthors = service.getAuthors();
  }


  getTitle(){
    return this.title;
  }

  ngOnInit() {
  }

}
