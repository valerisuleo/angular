import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nng-form',
  templateUrl: './nng-form.component.html',
  styleUrls: ['./nng-form.component.css']
})
export class NngFormComponent {

  log(asso) {
    console.log(asso);
  }

  // submit(f) {
  //   console.log(f);
  //   // f.value
  // }
}
