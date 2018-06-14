import { Component, OnInit } from '@angular/core';

// 2 we also need to import the http class
import { Http } from '@angular/http';



@Component({
  selector: 'donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {
  all: any[];
  private url = 'https://ga-doughnuts.herokuapp.com/doughnuts';


  //3 Whenever we want to get the data or send the data we use this HTTP class to send HTTP request to the back-end.
  constructor(private http: Http) {

// ____________________GET ALL THE DONUTS____________________
const vm = this;

  http.get(vm.url)
  .subscribe((response) => {
      vm.all = response.json();
      console.log('all', vm.all);
    });
  }


// _________________________NEW DONUT_________________________
donutsCreate(donutform) {
  const vm = this;

  let newDonut = donutform.value;

  vm.http.post(vm.url, JSON.stringify(newDonut))
  .subscribe((response) => {
    newDonut['id'] = response.json().id;
    vm.all.push(newDonut);
    console.log(vm.all);
  })
}


  ngOnInit() {}

}

// 1. we need to import the http module in theapp.module
