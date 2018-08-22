import { Component, OnInit } from '@angular/core';
// import { IndexDocsService } from '../../services/rdocumenti/index-docs/index-docs.service';
import { InitDocsService } from '../../services/rdocumenti/init/init-docs.service';

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
  allDocsParams: any[];

  isActive = false;



  constructor(private service: InitDocsService) {}

  dateRange:IDateRange = {
    startDate: null,
    endDate: null,
    placeHolder: null
  }

  updateDateRange(obj) {
    const vm = this;
    const btn = document.getElementsByClassName('search-docs')[0];

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
    const myVar = this.dateRange.endDate;

    vm.filterParams = docsform.value;
    console.log(vm.filterParams);

    (myVar === null) ? false : console.log('all good');

    // vm.service.sendFilters(vm.filterParams)
    // .subscribe((response) => {
    //   vm.filterResults = response.json();
    // });
    // docsform.reset();
  }

  ngOnInit() {
    //   const vm = this;
    //
    //   vm.service.getAll()
    //   .subscribe((response) => {
    //     vm.allDocsParams = response.json();
    //     console.log('allDocsParams', vm.allDocsParams);
    //   })
    // }
  }
}
