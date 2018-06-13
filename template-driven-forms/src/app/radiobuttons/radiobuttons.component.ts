import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'radiobuttons',
  templateUrl: './radiobuttons.component.html',
  styleUrls: ['./radiobuttons.component.css']
})
export class RadiobuttonsComponent {

  options = [
    {id:1, optionName: 'billing'},
    {id:2, optionName: 'shipping'},
    {id:3, optionName: 'computing'}
  ];


  log(asso) {
    console.log(asso);
  }

  submit(f) {
    console.log(f);
    // f.value
  }

}
