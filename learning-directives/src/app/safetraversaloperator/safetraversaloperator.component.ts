import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'safetraversaloperator',
  templateUrl: './safetraversaloperator.component.html',
  styleUrls: ['./safetraversaloperator.component.css']
})
export class SafetraversaloperatorComponent {
  task = {
    title: 'Learn angular',
    // assignee: {
    //   name: 'John Smith'
    // }
    assignee: null
  }
}
