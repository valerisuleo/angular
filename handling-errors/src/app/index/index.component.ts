import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostsService } from '../services/posts.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';



@Component({
  selector: 'placeholder-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  all = [];
  propertyNew = {};
  private url = 'http://localhost:3000/propertys'

  constructor(
    private propertyService: PostsService,
    private http: Http
  ) { }

// GET
  getAll() {
    const vm = this;

    vm.propertyService.getAll()
    .subscribe((response) => {
      vm.all = response;
      console.log('all', vm.all);
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
        console.log('bad BadRequestError');
        // potentially we can hava an error object coming from the server and we can display it.
        // postform.setErrors(error.originaError);
      } else {
      alert('An unxpected error occured!');
    }
    });
  }

// DELETE
 erasePost(property) {
  const vm = this;

  vm.propertyService.delete(property)
  .subscribe(() => {
    let index = vm.all.indexOf(property);
    vm.all.splice(index, 1);
  },
  (error: AppError) => {
    if (error instanceof NotFoundError) {
      alert('this property has already been deleted')
    } else {
      throw error;
    }
  });
}

  ngOnInit() {
    this.getAll();
  }

}
