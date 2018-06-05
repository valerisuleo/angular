import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  newItem = {
    task: '',
    done: false
  };

  items = [
    { task: 'washing', done: false },
    { task: 'cleaning', done: false },
    { task: 'homework', done: false },
    { task: 'sleep', done: false },
    { task: 'buy shoes', done: false }
  ];

  isFormVisible = false;

  constructor() {}

  addItem() {
    const vm = this;
    // this.items.push({ task: 'learn Angular', done: false});

    vm.items.push(vm.newItem);
    vm.newItem = { task: '', done: false} // clean the field after we submitted

    vm.isFormVisible = false;
    console.log(vm.items);
  }

  showForm() {
    this.isFormVisible = true;
  }

  ngOnInit() {
    // stuff we want to run on load
  }
}
