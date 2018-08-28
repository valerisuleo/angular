import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content-viewer',
  templateUrl: './content-viewer.component.html',
  styleUrls: ['./content-viewer.component.scss']
})
export class ContentViewerComponent implements OnInit {

  constructor() { }

  pdfSrc: string = '../../assets/az.pdf';

  ngOnInit() {
  }

}
