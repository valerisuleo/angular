import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  removePadding() {
    const el: HTMLElement = document.getElementById('my-main');
    el.style.padding = '0px';
  }

  paddingBack() {
    const el: HTMLElement = document.getElementById('my-main');
    el.style.padding = '15px';
  }

  welcomeUser() {
    const vm = this;
    const myInner = document.getElementById('my-inner');
    const pageLoadz = document.getElementById('page-load');
    const myWelcome = document.getElementsByClassName('my-welcome');

    vm.removePadding();

    setTimeout(() => {
      for (var i = 0; i < myWelcome.length; i++) {
        myWelcome[i].classList.add('done');
      }
      setTimeout(() => {
        for (var i = 0; i < myWelcome.length; i++) {
          myWelcome[i].classList.add('page');
        }
        setTimeout(() => {
          pageLoadz.classList.add('off');
        }, 500)
      }, 500)
    }, 1500);
    pageLoadz.addEventListener('webkitTransitionEnd', () => {
      vm.paddingBack();
    })
  }

  ngOnInit() {
    const vm = this;

    vm.welcomeUser();
  }
}
