import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  constructor() {


  }


  isFull = false;


  onClick() {

    this.isFull = !this.isFull;

    const fullstar = document.getElementById('asso');

    this.isFull ?
    fullstar.className = 'glyphicon glyphicon-star' :
    fullstar.className = 'glyphicon glyphicon-star-empty';
  }


  ngOnInit() {
  }

}
