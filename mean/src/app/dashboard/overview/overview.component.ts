import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngbd-tabset-basic',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @Input() bird: {};

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      console.log(this.bird);
    })
  }

}
