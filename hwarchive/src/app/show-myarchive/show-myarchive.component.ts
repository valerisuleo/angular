import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MyArchiveService } from '../services/my-archive.service';





@Component({
  selector: 'show-myarchive',
  templateUrl: './show-myarchive.component.html',
  styleUrls: ['./show-myarchive.component.css']
})
export class ShowMyarchiveComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: MyArchiveService
  ) { }

  all: any[];
  archive = {};

  viewAll() {
    const vm = this;

    vm.router.navigate(['/archive'], {});
  }


  showArchive() {
   const vm = this;
   const monthId = +vm.route.snapshot.paramMap.get('month');

   vm.all = vm.service.getArchive();
   return vm.all.find((archive) => {
     return archive.month === monthId;
   });

 }

  ngOnInit() {
    const vm = this;

    vm.archive = vm.showArchive()
    console.log(vm);
  }

}
