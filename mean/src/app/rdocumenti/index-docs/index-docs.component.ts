import { Component, OnInit } from '@angular/core';
import { IndexDocsService } from '../../services/rdocumenti/index-docs.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export interface IDateRange {
  startDate: Date;
  endDate: Date;
  placeHolder: string;
}

@Component({
  selector: 'index-docs',
  templateUrl: './index-docs.component.html',
  styleUrls: ['./index-docs.component.scss']
})
export class IndexDocsComponent implements OnInit {

  filterParams = {};
  filterResults: any[];

  isActive = false;

// FAKE OPTIONS TO POPULATE TEMPLATE
  searchOptions = [
    {id:1, radioName: 'Fax in'},
    {id:2, radioName: 'Casella Postale'},
    {id:3, radioName: 'Lavorato'},
    {id:7, radioName: 'Cerca nel cestino'}
  ];

  canale = [
    {id:4, optionName: 'business'},
    {id:5, optionName: 'consumer'},
    {id:6, optionName: 'high prioryty'}
  ];

  matchFax = [
    {id:12, optionMatch: 'Uguale a'},
    {id:22, optionMatch: 'Contiene'},
  ];


  constructor(private service: IndexDocsService) {}

  dateRange:IDateRange = {
    startDate: null,
    endDate: null,
    placeHolder: null
  }



  updateDateRange(obj) {
    const vm = this;
    const btn = document.getElementsByClassName('mais')[0];

    vm.dateRange.startDate = obj.startDate;
    vm.dateRange.endDate = obj.endDate;

    if (obj.startDate != null) {
      vm.dateRange.placeHolder = `From ${obj.startDate.day}/${obj.startDate.month}/${obj.startDate.year} `;
    }

    if (obj.endDate != null) {
      vm.dateRange.placeHolder += ` To ${obj.endDate.day}/${obj.endDate.month}/${obj.endDate.year}`;
      vm.isActive = false;
      btn.classList.remove('nope');
    }
  }


  toggleDataPicker() {
    this.isActive = !this.isActive;
  }

  docsFilter(docsform) {
    const vm = this;

    vm.filterParams = docsform.value;
    console.log(vm.filterParams);

    // vm.service.sendFilters(vm.filterParams)
    // .subscribe((response) => {
    //   vm.filterResults = response.json();
    // });
    // docsform.reset();
  }

  ngOnInit() {
  }
}
