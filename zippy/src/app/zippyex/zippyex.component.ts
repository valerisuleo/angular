import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-zippy',
  templateUrl: './zippyex.component.html',
  styleUrls: ['./zippyex.component.css']
})
export class ZippyexComponent {

  viewMode = '';


  @Input() isOpen = false;

  @Output() opened = new EventEmitter();
  @Output() closed = new EventEmitter();



  toggle() {

    this.isOpen = !this.isOpen;
    this.isOpen ? this.opened.emit() : this.closed.emit();

    const lis = document.getElementsByClassName('title');
    const spans = document.getElementsByTagName('span');

    for (var i = 0; i < lis.length; i++) {
      if (lis[i].classList.contains('active')) {
      spans[i].innerHTML = '&#9660;'
      } else {
      spans[i].innerHTML = '&#9654;'
      }
    }
  }
}
