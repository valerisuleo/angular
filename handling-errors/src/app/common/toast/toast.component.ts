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

    console.log('data', data);

    if (data === 404) {
      vm.isToasted = true;
      vm.errorMessage = 'This property has already been deleted';
    }

    if (data === 400) {
      console.log('I am bad');
    }

    if (data === 'No Results') {
      vm.isToasted = true;
      vm.errorMessage = 'Your search did not match any documents.';
    }

    setTimeout(() => {
      vm.isToasted = false;
    }, 2000);
  }



  ngOnInit() {
  }

}
