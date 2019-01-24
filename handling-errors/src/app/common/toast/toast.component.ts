import { Component, OnInit } from '@angular/core';
import { ForkService } from '../../services/fork.service';

@Component({
  selector: 'toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  isToasted: boolean = false;
  errorMessage: string;

  constructor(private propertyService: ForkService) {
    propertyService.interceptor
    .subscribe((args: any) => {
      this.receivingData(args)
    });
  }

  // Getting data from the Index component
  receivingData(data) {
    const vm = this;

    if (data === 404) {
      vm.isToasted = true;
      vm.errorMessage = 'This property has already been deleted';
    } else if (data === 400) {
      console.log('I am bad')
    }

    setTimeout(() => {
      vm.isToasted = false;
    }, 2000)
  }



  ngOnInit() {
  }

}
