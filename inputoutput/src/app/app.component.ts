import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inputoutput';

  // sms = {
  //   parent: 'I am your father',
  //   isFavorite: true
  // }

  sms: any;

  remove() {
    const vm = this;
    vm.sms = document.getElementById('modal-one');
    vm.sms.style.display = 'none';

    console.log('asso', typeof vm.sms);
  }

  onFavoriteChanged() {
    const vm = this;

    vm.sms.style.display = 'block';

  console.log('favorite has been clicked!');
}

}
