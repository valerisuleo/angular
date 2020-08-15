import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

log(asso) {
  console.log(asso);
  // now we need to import the FormsModule from angular in the app.module.ts
}


}
