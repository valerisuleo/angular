import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppFooterComponent implements OnInit {

  date:any  = new Date();
  year: any;

  constructor(private cd : ChangeDetectorRef) { }

  ngOnInit(): void {
    this.year = this.date.getFullYear();
    this.cd.markForCheck();
  }
}
