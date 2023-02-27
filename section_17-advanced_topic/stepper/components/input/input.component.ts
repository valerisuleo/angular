import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IStepOption } from '../interface';

@Component({
  selector: 'vm-stepper-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() formGroup: FormGroup;
  @Input() item: IStepOption;
  @Input() isHidden: boolean;
  @Output() handleChange = new EventEmitter();

  constructor() {}

  public toggleBox(): void {
    this.handleChange.emit(this.item);
  }
}
