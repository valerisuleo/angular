import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mypipe',
  templateUrl: './my-pipe.component.html',
  styleUrls: ['./my-pipe.component.css']
})
export class MyPipeComponent {

  course = {
    title: 'wdi 25',
    rating: 4.7892,
    students: 26000,
    price: 8000,
    startingDate: new Date(2017, 31, 1)
  }
}
