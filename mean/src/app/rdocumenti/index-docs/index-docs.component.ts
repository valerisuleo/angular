import { Component, OnInit } from '@angular/core';
import { IndexDocsService } from '../../services/rdocumenti/index-docs.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'index-docs',
  templateUrl: './index-docs.component.html',
  styleUrls: ['./index-docs.component.scss']
})
export class IndexDocsComponent implements OnInit {

  allDocs: any[];

  model: any;

  searchOptions = [
    {id:1, optionName: 'Fax in'},
    {id:2, optionName: 'Casella Postale'},
    {id:3, optionName: 'Lavorato'},
    {id:7, optionName: 'Cerca nel cestino'}
  ];

  canale = [
    {id:4, optionName: 'business'},
    {id:5, optionName: 'consumer'},
    {id:6, optionName: 'high prioryty'}
  ];

  constructor(private service: IndexDocsService) { }


  log(asso) {
    console.log('asso', asso);
  }

  submit(f) {
    console.log('f', f.value)
  }



  ngOnInit() {
    // const vm = this;
    //
    // vm.service.getAll()
    // .subscribe((response) => {
    //   vm.allDocs = response.json();
    //   console.log('allDocs', vm.allDocs);
    // });
  }
}
