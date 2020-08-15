import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nng-model-group',
  templateUrl: './nng-model-group.component.html',
  styleUrls: ['./nng-model-group.component.css']
})
export class NngModelGroupComponent {

  log(asso) {
    console.log(asso);
  }

  submit(f) {
    console.log(f);
    // f.value
  }
}
