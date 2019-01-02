import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SidebarService } from '../../services/sidebar/sidebar.service';
import { ConsumerService } from '../../services/sidebar/consumer.service';
import { BusinessService } from '../../services/sidebar/business.service';
import { ClienteService } from '../../services/sidebar/cliente.service';
import { HighPriorityService } from '../../services/sidebar/hpriority.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isActive: boolean = false;
  collapsed: boolean = false;
  showMenu: string = '';
  pushRightClass: string = 'push-right';

  allCdl: {};
  generica = [];
  creditoConsumer = [];
  fdQualificazione = [];
  fdAttivazione = [];
  fGenerico = [];

  allConsumer = [];
  allBusiness = [];
  allHighPriority = [];
  allCliente = [];

  fox = [];

  @Output() collapsedEvent = new EventEmitter<boolean>();
  @Output() myevent = new EventEmitter<any>();

  constructor(
    public router: Router,
    public service: SidebarService,
    public consumerService: ConsumerService,
    public businessService: BusinessService,
    public clienteService: ClienteService,
    public priorityService: HighPriorityService,
  ) {



// __________________________Animation & logic sidebar__________________________
    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
  }


  eventCalled() {
    this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  toggleCollapsed() {
      this.collapsed = !this.collapsed;
      this.collapsedEvent.emit(this.collapsed);
  }

  isToggled(): boolean {
      const dom: Element = document.querySelector('body');
      return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
      const dom: any = document.querySelector('body');
      dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
      const dom: any = document.querySelector('body');
      dom.classList.toggle('rtl');
  }

  onLoggedout() {
      localStorage.removeItem('isLoggedin');
  }


  // ___________________________________REST___________________________________

  getCreditoConsumer() {
    const vm =  this;

    return vm.service.getAll()
    .then((response) => {
      vm.creditoConsumer = response.credito_consumer;
    });
  }


  filterGenerica(string) {
    const vm =  this;

    return vm.service.getAll()
    .then((response) => {
      vm.generica = response.generica;

      return vm.generica.filter((list) => {
        return list.decrizioneFlusso === string;
      });
    });
  }

  lsFax(e) {
    const vm =  this;
    const current = e.target.textContent;

    if(current === 'CONSUMER') {
      vm.consumerService.getAll()
      .then((response) => {
        vm.fox = response;
        vm.myevent.emit(vm.fox);
      });
    };
    if(current === 'BUSINESS') {
      vm.businessService.getAll()
      .then((response) => {
        vm.fox = response;
        vm.myevent.emit(vm.fox);
      });
    };
    if(current === 'HIGH PRIORITY') {
      vm.priorityService.getAll()
      .then((response) => {
        vm.fox = response;
        vm.myevent.emit(vm.fox);
      });
    };
    if(current === 'CLIENTE') {
      vm.clienteService.getAll()
      .then((response) => {
        vm.fox = response;
        vm.myevent.emit(vm.fox);
      });
    };
  }


  ngOnInit() {
    const vm =  this;

    vm.getCreditoConsumer();

    vm.filterGenerica('FLUSSO QUALIFICAZIONE')
    .then((response) => {
      vm.fdQualificazione = response;
    });

    vm.filterGenerica('FLUSSO ATTIVAZIONE')
    .then((response) => {
      vm.fdAttivazione = response;
    });

    vm.filterGenerica('FLUSSO GENERICO')
    .then((response) => {
      vm.fGenerico = response;
    });
    // console.log(vm);
  }
}
