import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './myzyppy.component.html',
  styleUrls: ['./myzyppy.component.css']
})
export class MyzyppyComponent {

// 3 Now in order to pass the title we need an input property
@Input('title') title: string;


isExpanded: boolean;

onclick() {
  this.isExpanded = !this.isExpanded;
}

}

// 4 Now let's go to zippy.HTML
