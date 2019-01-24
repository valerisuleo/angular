import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  property = {};

  constructor(
    private propertyService: PostsService,
    private route: ActivatedRoute
  ) { }

  // propertyShow() {
  //   const vm = this;
  //   const id = vm.route.snapshot.paramMap.get('id');
  //
  //   console.log('id', id);
  //
  //   vm.propertyService.get(id)
  //   .subscribe((response) => {
  //     vm.property = response;
  //     console.log(vm.property);
  //   });
  // }

  ngOnInit() {
   // this.propertyShow();
  }

}
