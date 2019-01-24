import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  @Input('asso') sms: any;
  @Output('outputAlias') change = new EventEmitter();

    constructor() { }


    reAdd() {
      const vm = this;

      vm.change.emit()
    }

    ngOnInit() {

      const modale2 = document.getElementById('modale-due');
      modale2.style.display = 'none';
      console.log('sms', this.sms)
    }

    // onClick() {
    //   this.isFavorite = !this.isFavorite;
    // }

}
