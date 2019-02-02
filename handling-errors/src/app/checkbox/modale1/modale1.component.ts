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

  usimShadow: any;

  propertyNew = {
    usimsPreselected: []
  };

  constructor(
    private service: PostsService
  ) {

    this.service.currentSelectedChanged
    .subscribe((args) => {
      this.fromModale1(args);
    })
  }

  fromModale1(data) {
    const vm = this;
    vm.usimShadow = JSON.parse(JSON.stringify(data));

    vm.usims = vm.usimShadow.usim;
    console.log('vm.usims', vm.usims);
    // vm.propertyNew.usimsPreselected = data.usim;
    vm.propertyNew.usimsPreselected = vm.usims;

  }

  usimSelect(e, i) {
    const vm = this;

    const isChecked = e.target.checked;

    !isChecked ? vm.usims.splice(i, 1) : console.log('wow');
    console.log('vm.usims', vm.usims);

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
