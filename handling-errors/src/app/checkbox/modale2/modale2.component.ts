import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';


@Component({
  selector: 'modale2',
  templateUrl: './modale2.component.html',
  styleUrls: ['./modale2.component.css']
})
export class Modale2Component implements OnInit {

  all = [];
  usims = [];

  constructor(
    private service: PostsService
  ) { }


  propertyIndex() {
    const vm = this;

    vm.service.getAll()
    .subscribe((response) => {
      console.log(response);
      vm.all = response;
    });
  }


  usimSelect(selectedUsim) {
    this.service.resfreshContent(selectedUsim);
  }

  ngOnInit() {
    this.propertyIndex();
  }

}
