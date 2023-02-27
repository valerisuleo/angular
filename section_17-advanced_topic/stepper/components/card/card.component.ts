import { Component, Input } from '@angular/core';

@Component({
  selector: 'vm-stepper-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() isActive: boolean;
  constructor() {}
}
