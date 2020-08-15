import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  title = 'Welcome to GA WDI-25!'
  colspan = 2;

  isActive = false;

  onClick($event) {
    this.isActive = !this.isActive;
    // console.log($event);
  }

// __________________________ngModel__________________________
    email = 'me@ga.co';

    onKeyUp() {
    console.log(this.email);
  }


  // ____________________Template Variables____________________
  //   onKeyUp(email) {
  //   console.log(email);
  // }


  //__________________________$event__________________________
  // onKeyUp($event) {
  //   console.log('enter pls');
  //   console.log($event.target.value);
  // }

  // ___________________STOP EVENT BUBBLING___________________
  // onClick($event) {
  // $event.stopPropagation();
  //   console.log('uhhhh you clicked me!', $event);
  // }
  // onDivClick() {
  //   console.log('hey I am the onDivClick!');
  // }

  ngOnInit() {
  }

}
