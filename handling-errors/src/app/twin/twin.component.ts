import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ForkService } from '../services/fork.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';
import { Router } from '@angular/router';

@Component({
  selector: 'twin',
  templateUrl: './twin.component.html',
  styleUrls: ['./twin.component.css']
})
export class TwinComponent implements OnInit {


    all: any[];
    // propertyNew = {};

    notFound = 404;
    badRequest = 400;

    isPosts: boolean;


    constructor(
      private postService: ForkService,
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
      vm.isPosts = vm.whereAreWe('twin');

      if (vm.isPosts) {
        vm.postService.refreshContent('post-it');
      }

      console.log('isPosts', vm.isPosts);
    }

  // GET
    getAll() {
      const vm = this;

      vm.postService.getAll()
      .subscribe((response) => {
        // vm.all = response;
        console.log('response', response);
      },
      error  => {
        console.log('error', error);
        // alert('An unxpected error occured!');
      });
    }

    ngOnInit() {
      this.fork();
      this.getAll();
    }

}
