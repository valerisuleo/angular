import { Component, OnInit } from '@angular/core';
import { IndexDocsService } from '../../services/rdocumenti/index-docs.service';


@Component({
  selector: 'index-docs',
  templateUrl: './index-docs.component.html',
  styleUrls: ['./index-docs.component.scss']
})
export class IndexDocsComponent implements OnInit {

  allDocs: any[];

  constructor(private service: IndexDocsService) { }

  ngOnInit() {
    const vm = this;

    vm.service.getAll()
    .subscribe((response) => {
      vm.allDocs = response.json();
      console.log('allDocs', vm.allDocs);
    });
  }
}
