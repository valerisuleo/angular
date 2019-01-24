import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ForkService } from '../services/fork.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';
import { Router } from '@angular/router';


@Component({
  selector: 'placeholder-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  all: any[];
  propertyNew = {};

  notFound = 404;
  badRequest = 400;

  isProperty: boolean;

  constructor(
    private propertyService: ForkService,
    private http: Http,
    private router: Router
  ) {}

  whereAreWe(string) {
    const vm = this;
    const getUrl: string = vm.router.url;
    return getUrl.includes(string);
  }

  fork() {
    const vm = this;
    vm.isProperty = vm.whereAreWe('house');

    if (vm.isProperty) {
      vm.propertyService.refreshContent('homesweethome');
    }

    console.log('isProperty', vm.isProperty);
  }


// GET
  getAll() {
    const vm = this;

    vm.propertyService.getAll()
    .subscribe((response) => {
      vm.all = response;
      console.log('response', response);
    },
    error  => {
      console.log('error', error);
      alert('An unxpected error occured!');
    });
  }

// CREATE
  postCreate() {
    const vm = this;

    vm.propertyService.create(vm.propertyNew)
    .subscribe((response) => {
      vm.all.push(response);
    }, (error: AppError) => {
      if (error instanceof BadRequestError) {
        console.log('error', error);
        alert('Bad Request Dude!')
        // potentially we can hava an error object coming from the server and we can display it.
        // postform.setErrors(error.originalError);
      } else {
      throw error
    }
    });
  }

// // DELETE
 erasePost(property) {
  const vm = this;

  vm.propertyService.delete(property)
  .subscribe(() => {
    let index = vm.all.indexOf(property);
    vm.all.splice(index, 1);
  },
  (error: AppError) => {
    if (error instanceof NotFoundError) {
      vm.propertyService.refreshContent(vm.notFound);
    } else {
      throw error;
    }
  });
}

  ngOnInit() {
    this.fork()
    this.getAll();
  }

}
