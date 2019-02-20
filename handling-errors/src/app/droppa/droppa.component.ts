import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'droppa',
  templateUrl: './droppa.component.html',
  styleUrls: ['./droppa.component.css']
})
export class DroppaComponent implements OnInit {

  isOpen: boolean;
  constructor() {
    this.isOpen = false;
  }


  toggleMenu() {
    this.isOpen = !this.isOpen;
    const yu = document.getElementById('asso')
    this.isOpen ? yu.style.opacity = '1' : yu.style.opacity = '0';
    console.log(yu);



  }

  ngOnInit() {
  }

}
