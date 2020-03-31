import { Component, OnInit } from '@angular/core';
// 2 import  http class
import { Http } from '@angular/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  all: any[];
  onLoad: any[];
  index: number;


  // 3 Add http in the constructor
  constructor(private http: Http, private modalService: NgbModal) {

  const vm = this;

  vm.index = 12;

  vm.http.get('https://api.punkapi.com/v2/beers?page=1&per_page=80')
  .subscribe((response) => {
    vm.all = response.json();
    console.log('asso', vm.all);
    vm.onLoad = vm.all.slice(0,vm.index);
  });
}

moreBeer() {
  const vm = this;

  vm.index = vm.index+ 12;
  vm.onLoad = vm.all.slice(0,vm.index);

  if (vm.onLoad.length === vm.all.length) {
    alert('No beers left!')
  }
}

open(content) {
  const vm = this;

  vm.modalService.open(content)


}

ngOnInit() {
}

}

// 1 Import http module from angulare/core in app.module
