import { Component, OnInit } from '@angular/core';

// 2 we also need to import the http class
import { Http } from '@angular/http';



@Component({
  selector: 'donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent {
  all: any[];
  newDonut= {};
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

  vm.newDonut = donutform.value;

  vm.http.post(vm.url, JSON.stringify(vm.newDonut))
  .subscribe((response) => {
    vm.newDonut['id'] = response.json().id;
    vm.all.push(vm.newDonut);
    vm.newDonut = {};

    console.log('vm.all', vm.all)
  });
  donutform.reset();
}


// ________________________UPDATE DONUT________________________
updateDonut(donut) {
  const vm = this;
  // vm.http.put(`https://ga-doughnuts.herokuapp.com/doughnuts/${donut.id}`, JSON.stringify(donut))
  vm.http.put(vm.url + '/' + donut.id, JSON.stringify(donut))
  .subscribe((response) => {
    console.log(response.json());
  })
}


// ________________________DELETE DONUT_________________________
deleteDonut(donut) {
  const vm = this;

  vm.http.delete(vm.url + '/' + donut.id)
  .subscribe(() => {
    // 1. we need to find the index of the item in the array
    let donutIndex = vm.all.indexOf(donut);
    // 2. now we can pass the index as argument into the splice method.
    vm.all.splice(donutIndex, 1);
  }); 
}



// donutsCreate(donutform: HTMLFormElement) {
//   let newDonut = {donutform: donutform.value}
//   console.log(newDonut);
//
//   this.http.newDonut(this.url, JSON.stringify(newDonut))
//   .subscribe((response) => {
//     // newDonut['id'] = response.json().id;
//     console.log(response.json());
//   });
//   donutform.reset();
// }

}

// 1. we need to import the http module in theapp.module
