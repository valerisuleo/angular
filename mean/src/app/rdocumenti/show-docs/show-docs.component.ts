import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BirdsService } from '../../services/birds/birds.service';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'showdocs',
  templateUrl: './show-docs.component.html',
  styleUrls: ['./show-docs.component.scss'],
  animations: [routerTransition()]
})
export class ShowDocsComponent implements OnInit {


  bird = {};

  constructor(
    private route: ActivatedRoute,
    private service: BirdsService
  ) { }


  showDocs() {
    const vm = this;
    const id = vm.route.snapshot.paramMap.get('id');

    vm.service.get(id)
    .subscribe((response) => {
      vm.bird = response;
    });
  }

  ngOnInit() {
    const vm = this;

    vm.showDocs();
    console.log(vm);
  }
}
