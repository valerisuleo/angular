import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostsService } from '../services/posts.service';
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

  groups = [];
  page = 1;
  pageSize = 10;
  collectionSize: number;

  isOpen: boolean;

  constructor(private service: PostsService) {
    this.isOpen = false;
  }

  postsIndex() {
    const vm = this;

    vm.service.getAll()
    .subscribe((response) => {
      vm.groups = response;
      vm.collectionSize = vm.groups.length;

      console.log(vm.groups);
    });
  }

  get groupsAll() {
    return this.groups
    .map((group, i) => ({id: i + 1, ...group}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  // toggleMenu(e) {
  //   this.isOpen = !this.isOpen;
  //   const current = e.target;
  //   this.isOpen ? current.style.display = 'block' : current.style.display = 'none';
  //   console.log(current);
  // }

  greet(index, e) {
    console.log(e.target.innerHTML);
    let current = e.target.innerHTML;

    current = 'Vale';
  }

  ngOnInit() {
    this.postsIndex();
  }

}
