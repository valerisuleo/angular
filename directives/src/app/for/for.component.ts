import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'for-directive',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent {

  users = [
    {
      id: 1,
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      username: 'mark',
      email: 'mark@april.biz',
    },
    {
      id: 3,
      username: 'jack',
      email: 'jack@april.biz',
    }
  ]
}
