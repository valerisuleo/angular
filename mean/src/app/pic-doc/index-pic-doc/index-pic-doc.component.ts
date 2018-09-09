import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'indexpicdoc',
  templateUrl: './index-pic-doc.component.html',
  styleUrls: ['./index-pic-doc.component.scss'],
  animations: [routerTransition()]

})
export class IndexPicDocComponent implements OnInit {

  faxes: any[];

  constructor() { }

  onFavoriteChanged(fox) {
    const vm = this;

    vm.faxes = fox;
    console.log(vm.faxes);

  }


  ngOnInit() {

  }

}
