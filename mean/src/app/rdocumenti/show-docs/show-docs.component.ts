import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BirdsService } from '../../services/birds/birds.service';

@Component({
  selector: 'show-docs',
  templateUrl: './show-docs.component.html',
  styleUrls: ['./show-docs.component.scss']
})
export class ShowDocsComponent implements OnInit {

  docs = {};

  constructor(
    private route: ActivatedRoute,
    private service: BirdsService
  ) { }


  showDocs() {
    const vm = this;
    const id = vm.route.snapshot.paramMap.get('id');

    vm.service.get(id)
    .subscribe((response) => {
      vm.docs = response;
    });
  }

  ngOnInit() {
    const vm = this;

    vm.showDocs();
    console.log(vm);
  }
}
