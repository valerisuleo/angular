import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SidebarService } from '../../services/sidebar/sidebar.service';

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

  allCdl: any[];
  fdQualificazione: any[];
  fdAttivazione: any[];
  fGenerico: any[];

  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(public router: Router, public service: SidebarService) {

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


  filterCdl(string) {
    const vm =  this;

    vm.allCdl = vm.service.getlistaCode();

    return vm.allCdl.filter((lista) => {
      return lista.decrizioneFlusso === string;
    })
  }

  ngOnInit() {
    const vm =  this;

    vm.fdQualificazione = vm.filterCdl('FLUSSO QUALIFICAZIONE');
    vm.fdAttivazione = vm.filterCdl('FLUSSO ATTIVAZIONE');
    vm.fGenerico = vm.filterCdl('FLUSSO GENERICO');
  }
}
