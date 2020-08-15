import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

    goToUrl = 'https://www.youtube.com/';

    constructor(private router: Router) { }

    takeMeto() {
        console.log('dio');
        // window.location.href = 'https://www.youtube.com/';
        // this.router.navigate(['https://www.youtube.com/']);
        window.open("https://www.youtube.com/", "_blank");
    }

  ngOnInit() {
      this.goToUrl = '';
  }

}
