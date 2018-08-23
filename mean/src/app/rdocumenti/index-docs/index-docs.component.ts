import { Component, OnInit } from '@angular/core';
import { IndexDocsService } from '../../services/rdocumenti/index-docs/index-docs.service';
import { InitDocsService } from '../../services/rdocumenti/init/init-docs.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'index-docs',
  templateUrl: './index-docs.component.html',
  styleUrls: ['./index-docs.component.scss']
})
export class IndexDocsComponent implements OnInit {

  filterParams = {};

  filteredResults: any[];
  allDocsParams: any[];

  isActive = false;

  dateRange = {
    startDate: null,
    endDate: null,
    placeHolder: null
  }


  constructor(private service: InitDocsService, private serviceDocs: IndexDocsService ) {}

  updateDateRange(obj) {
    const vm = this;

    vm.dateRange.startDate = obj.startDate;
    vm.dateRange.endDate = obj.endDate;

    if (obj.startDate != null) {
      vm.dateRange.placeHolder = `From ${obj.startDate.day}/${obj.startDate.month}/${obj.startDate.year} `;
    }

    if (obj.endDate != null) {
      vm.dateRange.placeHolder += `To ${obj.endDate.day}/${obj.endDate.month}/${obj.endDate.year}`;
      vm.isActive = false;
    }
  }


  toggleDataPicker() {
    this.isActive = !this.isActive;
  }


  docsFilter(docsform) {
    const vm = this;
    const preventSubmit = this.dateRange.endDate;
    // (preventSubmit === null) ? false : console.log('all good');

    vm.filterParams = docsform.value;
    // console.log(vm.filterParams);


    vm.serviceDocs.getAll()
    .subscribe((response) => {
      vm.filteredResults = response.json();
      console.log('filteredResults', vm.filteredResults);
    })


    // vm.service.sendFilters(vm.filterParams)
    // .subscribe((response) => {
    //   vm.filteredResults = response.json();
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
