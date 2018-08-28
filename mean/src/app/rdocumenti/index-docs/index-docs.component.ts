import { Component, OnInit } from '@angular/core';
import { IndexDocsService } from '../../services/rdocumenti/index-docs/index-docs.service';
import { InitDocsService } from '../../services/rdocumenti/init/init-docs.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'docs-list',
  templateUrl: './index-docs.component.html',
  styleUrls: ['./index-docs.component.scss']
})
export class IndexDocsComponent implements OnInit {

  filterParams = {};
  allDocsParams: any[];

  allDocs: any[];
  limit: any[];
  indexArray: number;
  pageNumber: number;

  isActive = false;

  dateRange = {
    startDate: null,
    endDate: null,
    placeHolder: null
  }



  constructor( private service: InitDocsService, private serviceDocs: IndexDocsService ) {

    this.indexArray = 10;
    this.pageNumber = 1;
  }

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
    const tbList = document.getElementsByClassName('table-docs')[0];
    // (preventSubmit === null) ? false : console.log('all good');

    // vm.filterParams = docsform.value;
    // console.log(vm.filterParams);
    // vm.service.sendFilters(vm.filterParams)
    // .subscribe((response) => {
    //   vm.allDocs = response.json();
    // });
    tbList.classList.remove('nope');
    docsform.reset();
  }




  nextPage() {
    const vm = this;
    vm.pageNumber++;
    vm.limit = vm.allDocs.slice(((vm.pageNumber-1) * vm.indexArray), (vm.pageNumber*vm.indexArray));
  }


  previousPage() {
    const vm = this;
    vm.pageNumber--;

    if (vm.limit.length === 10) {
      vm.limit = vm.allDocs.slice(((vm.pageNumber-1) * vm.indexArray), (vm.pageNumber*vm.indexArray));
    } else if (vm.limit.length < 10) {
      (<HTMLInputElement> document.getElementById("previous-btn")).disabled = true;
      return false
    }
  }


  ngOnInit() {
    const vm = this;

    vm.serviceDocs.getAll()
    .subscribe((response) => {
      vm.allDocs = response.json();
      vm.limit = vm.allDocs.slice(0, vm.indexArray);
    });

    //
    //   vm.service.getAll()
    //   .subscribe((response) => {
    //     vm.allDocsParams = response.json();
    //     console.log('allDocsParams', vm.allDocsParams);
    //   })
    // }
  }
}
