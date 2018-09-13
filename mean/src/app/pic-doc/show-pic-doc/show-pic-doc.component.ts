import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { ClienteService } from '../../services/sidebar/cliente.service';

@Component({
  selector: 'showpicdoc',
  templateUrl: './show-pic-doc.component.html',
  styleUrls: ['./show-pic-doc.component.scss']
})
export class ShowPicDocComponent implements OnInit {

  fax = {}

  constructor(
    private route: ActivatedRoute,
    private service: ClienteService
  ) { }

  showCdl() {
    const vm = this;
    const id = vm.route.snapshot.paramMap.get('id');

    vm.service.get(id)
    .subscribe((response) => {
      vm.fax = response;
    });
  }

  ngOnInit() {
    const vm = this;

    vm.showCdl();
    console.log(vm);

  }
}
