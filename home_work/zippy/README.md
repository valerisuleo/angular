

# How to Create a Zippy Component in Angular

### Overview

In this article, we are going to develop a zippy component application in Angular. It demonstrates the following.


* Data flow in Angular
* Working of Inputs and Outputs at Component level.
* An event is emitted when a component is opened or closed.
* At such event the application state is logged on the screen.


### Zippy Component

In the zippy component, we are going to create a hyperlink (i.e. Get Application Status). When this hyperlink is clicked, it will emit an event and display the underlying hidden text (i.e. ‘View the Projected content’). An event will log the application status as ‘Component was opened’. The same hyperlink when clicked again will hide the underlying text and the emitted event will log the application status as ‘Component was closed’. Lets’ build this app as shown below.


## app/Component.ts



```import { Component } from '@angular/core';

@Component({
  selector: 'my-zippy-app',
  templateUrl: 'resource/app.component.html'
})

export class AppComponent {

  logs:string[] = [];

  log(message) {
    this.logs.push(message);
  }
}
```
### Explanation of Code:

Here, we are declaring the component with selector as ‘my-zippy-app’ and templateUrl as ‘resource/app-component.html’ that has the required HTML code to render on the web page. The controller class ‘AppComponent’ has an array of string type (logs: string []) that holds the selected text from the zippy component. Next, we are writing a function i.e. log (message) that has event binding with the ‘selected’ event that will eventually call this function to display the selected text on the screen when the zippy component’s hyperlink is clicked.



## app.component.html



```<div align="center">
<h2>Zippy Component Demonstration</h2>

<p>This component demonstrates the following.</p>
<div>
1. Data flow in Angular 2.
2. Working of Inputs and Outputs at Component level.
3. An event is emitted when a component is opened or closed.
4. At such event the application state is logged.
</div>
<p>Click on the below "Get Application Status" link to get Application Status Logs.</p>
<hr>
<br>
<my-zippy (opened)="log('Component was Opened')" (closed)="log('Component was Closed')" [isOpen]="false">
  View the Projected content
</my-zippy>

<h3>Application Logs:</h3>
<ul>
  <li *ngFor="let log of logs">
    {{log}}
  </li>
</ul>
<hr>
</div>
```

### Explanation of Code:

Here, we are declaring the tag as ‘my-zippy’ where we are calling the ‘log (message)’ function to log the message on opened and closed events as ‘Component was Opened’ and ‘Component was Closed’, respectively. Initially at the time of loading we will keep [isOpen] event as false (i.e. no display of messages). Later, we will display the application logs lists whenever the zippy component link is clicked over and over


## app/Zippy.Component.ts



```import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'my-zippy',
  templateUrl: 'resource/zippy.component.html'
})
export class ZippyComponent {

  @Input() isOpen = true;
  @Output() opened = new EventEmitter();
  @Output() closed = new EventEmitter();

  toggle() {
    this.isOpen = !this.isOpen;
    this.isOpen ? this.opened.emit() : this.closed.emit();
  }
}
```
### Explanation of Code:

In the ‘app.component.html’ file, we have used the tags ‘my-zippy’ which is nothing but the component selector that has underlying HTML defined in the template file ‘resource/zippy.component.html’ as shown below. It has the controller class ‘ZippyComponent’ we are declaring and initializing the values to the input (i.e. isOpen) and Outputs (i.e. opened and closed) events. Lastly, we have defined a ‘toggle ()’ function which does the flipping of displaying and hiding the underlying text when we click the zippy component.


## zippy.component.html



```<div>
  <a href="#" (click)="toggle()" class="title">
    {{ isOpen ? '&#9660;' : '&#9654;'}} Get Application Status
  </a>
  <div [hidden]="!isOpen" class="content">
    <ng-content></ng-content>
  </div>
</div>
```
### Explanation of Code:

It is the HTML template for ‘Zippy.Component’, it calls the ‘toggle ()’ function and does the flip flop of hiding and displaying the underlying text (i.e. Get Application Status) upon clicking of the hyperlink.
