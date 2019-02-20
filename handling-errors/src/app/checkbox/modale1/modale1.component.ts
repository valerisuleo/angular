import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostsService } from '../../services/posts.service';
import { AppError } from '../../common/app-error';
import { NotFoundError } from '../../common/not-found-error';
import { BadRequestError } from '../../common/bad-request-error';
import { Router } from '@angular/router';



@Component({
  selector: 'modale1',
  templateUrl: './modale1.component.html',
  styleUrls: ['./modale1.component.css']
})
export class Modale1Component implements OnInit {

  usims = [];

  address: string;
  postcode: string;
  status: string;

  propertyNew = {
    usimsPreselected: []
  };

  constructor( private service: PostsService ) {

    this.service.currentSelectedChanged
    .subscribe((args) => {
      this.fromModale2(args);
    })
  }

  fromModale2(data) {
    const vm = this;

    vm.address = data.address;
    vm.postcode = data.postcode;
    vm.status = data.stato;

    data.usim.forEach((item) => {
      item.checka = true;
      vm.usims.push(item);
    });

    vm.propertyNew.usimsPreselected = vm.usims;
  }

  usimSelect(e, usim) {
    const vm = this;
    const isChecked = e.target.checked;

    !isChecked ? usim.checka = false : usim.checka = true;

    vm.propertyNew.usimsPreselected = vm.removeFalse();
  }

  removeFalse() {
    const vm = this;
    return vm.usims.filter((item) => {
      return item.checka === true;
    });
  }

  ngOnInit() {}

}
