import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  paymentMethods = [
    {id:1, name: 'creditcard'},
    {id:2, name: 'cash'},
    {id:3, name: 'check'}
  ];

  log(x){
    console.log(x);
  }

  onSubmit(f){
    console.log(f);
  }
}
