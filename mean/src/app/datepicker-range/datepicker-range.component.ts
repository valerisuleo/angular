import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ngbd-datepicker-range',
  templateUrl: './datepicker-range.component.html',
  styleUrls: ['./datepicker-range.component.scss']
})
export class NgbdDatepickerRange {

  hoveredDate: NgbDate;

  fromDate: NgbDate;
  toDate: NgbDate;

  @Input() initialDate: Date;
  @Output() onDateSelected = new EventEmitter();


  constructor(calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 0);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }

    this.onDateSelected.emit({startDate: this.fromDate, endDate: this.toDate });
  }

  isHovered = (date: NgbDate) => this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  isInside = (date: NgbDate) => date.after(this.fromDate) && date.before(this.toDate);
  isRange = (date: NgbDate) => date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date)

}
