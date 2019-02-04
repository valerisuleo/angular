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
  all = [];
  usims = [];
  usimArray = [];

  address: string;
  postcode: string;
  status: string;


  propertyNew = {
    usimsPreselected: []
  };

  constructor(
    private service: PostsService
  ) {

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
      vm.usims.push(item);
    });
    console.log('usims', vm.usims);
    vm.hookupUsimToform();
  }


  hookupUsimToform() {
    const vm = this;
    vm.usimArray = JSON.parse(JSON.stringify(vm.usims));
    vm.propertyNew.usimsPreselected = vm.usimArray;
  }

  usimSelect(e, index) {
    const vm = this;

    console.log('index', index);
    // const isChecked = e.target.checked;
    // !isChecked ? vm.deleteItem(index, vm.usimArray) : vm.usimArray.push(index);
  }

  deleteItem(item, array) {
    var index = array.indexOf(item);
    array.splice(index, 1);
  }

  // CREATE
  postCreate() {
  const vm = this;

  vm.service.create(vm.propertyNew)
  .subscribe((response) => {
    vm.all.push(response);
  }, (error: AppError) => {
    if (error instanceof BadRequestError) {
      console.log('error', error);
      alert('Bad Request Dude!')
      // potentially we can hava an error object coming from the server and we can display it.
      // postform.setErrors(error.originalError);
    } else {
    throw error;
  }
});
}


ngOnInit() {
  // this.propertyIndex();
}

}
