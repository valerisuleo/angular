import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

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
