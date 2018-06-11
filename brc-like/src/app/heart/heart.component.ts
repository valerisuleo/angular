import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent {

@Input('likesCount') likesCount: number;
@Input('isRed') isRed: boolean;



  onClick() {
    this.likesCount += (this.isRed) ? -1 : 1;
    this.isRed = !this.isRed;
  }


}
