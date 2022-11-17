import { Component, Input } from '@angular/core';
import { IChipStyle } from './interface';

@Component({
  selector: 'vm-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent {
  @Input() public chipStyle: IChipStyle;
  @Input() public chipStyleHover: IChipStyle;
  public isHovering: boolean;

  constructor() {}

  public handleMouseOver(): void {
    this.isHovering = true;
  }

  public handleMouseOut(): void {
    this.isHovering = false;
  }
}
