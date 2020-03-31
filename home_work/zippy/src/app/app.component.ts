import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  logs:string[] = [];


    log(message) {

      this.logs.push(message);

      console.log(this.logs);


    }

}
