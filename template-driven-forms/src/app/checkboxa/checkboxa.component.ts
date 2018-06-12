import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'checkboxa',
  templateUrl: './checkboxa.component.html',
  styleUrls: ['./checkboxa.component.css']
})
export class CheckboxaComponent {
  log(asso) {
    console.log(asso);
  }

  submit(f) {
    console.log(f);
    // f.value
  }


}
