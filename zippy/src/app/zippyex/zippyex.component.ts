import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-zippy',
  templateUrl: './zippyex.component.html',
  styleUrls: ['./zippyex.component.css']
})
export class ZippyexComponent {

  @Input() isOpen = true;

    @Output() opened = new EventEmitter();

    @Output() closed = new EventEmitter();



    toggle() {

      this.isOpen = !this.isOpen;

      this.isOpen ? this.opened.emit() : this.closed.emit();

    }

}
