import { Component, OnInit } from '@angular/core';
import { IndexDocsService } from '../../services/rdocumenti/index-docs/index-docs.service';
import { InitDocsService } from '../../services/rdocumenti/init/init-docs.service';
import { IndexPraticheService } from '../../services/rpratiche/ls-pratiche/index-pratiche.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routerTransition } from '../../router.animations';
import { BirdsService } from '../../services/birds/birds.service';


@Component({
  selector: 'docs-list',
  templateUrl: './index-docs.component.html',
  styleUrls: ['./index-docs.component.scss'],
  animations: [routerTransition()]
})
export class IndexDocsComponent implements OnInit {

  filterParams = {};
  allParams: any[];

  all: any[];
  limit: any[];
  indexArray: number;
  pageNumber: number;
  titleResults: string;

  isActive = false;
  spinners = false;


  calendar = {
    start: {
      startDate: null,
      time: {
        hour: null,
        minute: null,
        second: null
      }
    },
    end: {
      endDate: null,
      time: {
        hour: null,
        minute: null,
        second: null
      }
    },
    placeHolder: null
  }


  constructor(
    private serviceInit: InitDocsService,
    private serviceDocs: BirdsService,
    private servicePrat: IndexPraticheService ) {

    this.indexArray = 10;
    this.pageNumber = 1;
  }

  updateDateRange(obj) {
    const vm = this;

    vm.calendar.start.startDate = obj.startDate;
    vm.calendar.end.endDate = obj.endDate;

    if (obj.startDate != null) {
      vm.calendar.placeHolder = `From ${obj.startDate.day}/${obj.startDate.month}/${obj.startDate.year} `;
    }

    if (obj.endDate != null) {
      vm.calendar.placeHolder += `To ${obj.endDate.day}/${obj.endDate.month}/${obj.endDate.year}`;
      vm.isActive = false;
    }
  }

  toggleDataPicker() {
    this.isActive = !this.isActive;
  }

  toggleSpins() {
    const vm = this;
    const allInputs = document.getElementsByTagName('input');
    const minute = <HTMLInputElement> document.getElementsByClassName('ngb-tp-minute')[1].children[0];

    for (var i = 0; i < allInputs.length; i++) {
      allInputs[i].addEventListener('focus', () => {
        vm.spinners = true;
      });
      allInputs[i].addEventListener('blur', () => {
        if (minute.value !== '') {
          vm.spinners = false;
        }
      });
    }
  }

  docsFilter(docsform) {
    const vm = this;
    console.log(docsform.value);

    if (docsform.value.docsoptions === '') {
      vm.getDocs();
    } else if (docsform.value.docsoptions === 3) {
      vm.getPratiche();
    }
  }

  getDocs() {
    const vm = this;
    const table1 = document.getElementById('table-one');

    vm.serviceDocs.getAll()
    .then((response) => {
      vm.all = response;
      vm.limit = vm.all.slice(0, vm.indexArray);

      table1.classList.remove('nope');
      vm.titleResults = 'Documenti';
      vm.saveData();
    });
  }

  getPratiche() {
    const vm = this;
    const table2 = document.getElementById('table-two');

    vm.servicePrat.getAll()
    .then((response) => {
      vm.all = response.json();
      vm.limit = vm.all.slice(0, vm.indexArray);

      table2.classList.remove('nope');
      vm.titleResults = 'Pratiche';
      vm.saveData();
    });
  }

  nextPage() {
    const vm = this;
    vm.pageNumber++;
    vm.limit = vm.all.slice(((vm.pageNumber-1) * vm.indexArray), (vm.pageNumber*vm.indexArray));
  }

  previousPage() {
    const vm = this;
    vm.pageNumber--;

    if (vm.limit.length === 10) {
      vm.limit = vm.all.slice(((vm.pageNumber-1) * vm.indexArray), (vm.pageNumber*vm.indexArray));
    } else if (vm.limit.length < 10) {
      (<HTMLInputElement> document.getElementById("previous-btn")).disabled = true;
      return false
    }
  }

  // save data to local storage
  saveData() {
    const vm = this;

    var str = JSON.stringify(vm.all);
    localStorage.setItem('vmAll', str);
  }

  // get data from localStorage
  getData() {
  const vm = this;

  var str = localStorage.getItem('vmAll');
  // localStorage.removeItem('Array');
  vm.limit = JSON.parse(str);
  if (!vm.limit) {
    vm.limit = [];
  }
}


  ngOnInit() {
    const vm = this;

    vm.getData()
    vm.toggleSpins();
    // vm.spinnersShowAgain();

    // Call fake service
    vm.allParams = vm.serviceInit.getFormParmas();
  }
}
