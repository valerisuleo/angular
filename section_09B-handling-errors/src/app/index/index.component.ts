import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PropertyService } from '../services/property.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';
import { Router } from '@angular/router';


@Component({
  selector: 'placeholder-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {

  all = [];
  propertyNew = {};

  subscription: any

  constructor(private service: PropertyService) {}

// INDEX
  propertyIndex() {
    const vm = this;

    vm.service.getAll()
    .subscribe((response) => {
      vm.all = response;
      console.log(vm.all);
    });
  }


// NEW
  propertyCreate() {
    const vm = this;

    vm.service.create(vm.propertyNew)
    .subscribe((response) => {
      vm.all.push(response);
    }, (error: AppError) => {
      if (error instanceof BadRequestError) {
          alert('BadRequestError')
      } else {
        console.log(error);
        console.log(error.originalError.statusText);
        throw error;
      }
    });
  }

  ngOnInit() {
    this.propertyIndex();
  }

}
