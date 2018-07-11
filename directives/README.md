# Directives

### In this section...

- ngFor
- ngIf
- ngSwitchCase
- ngClass
- Building custom directives

## ngIf

There are times when you Wanna show or hide some part of the page based on specific conditions.

```
export class AppComponent {
  courses: [1, 2];
}
```

Here `/app.component.html` we wanna render a div or another.

```
<div>List of courses</div>
<div>No courses yet!</div>
```

To do that we use `ngIf`

```
<div *ngIf="courses.length > 0">List of courses</div>
<div *ngIf="courses.length === 0>No courses yet!</div>
```
> When we use `ngIf` an elemet will be added or removed from the DOM.

Now in angular 4.x a better syntax to implement this feature, like an `if/else` statement:

```
<div *ngIf="courses.length > 0;
  then CoursesList
  else noCourses">List of courses
</div>

<ng-template #CoursesList>List of courses</ng-template>
<ng-template #noCourses>No courses yet!</ng-template>
``` 

### Hidden Property
Instead of using the `ngIf` directive we can use the `hidden` attribute.

```
<div [hidden]="courses.length === 0">
	List of courses
</div>

<div [hidden]="courses.length > 0">
	No courses yet!
</div>
```

> when we use the `hidden` attribute the elment is still here in the DOM; we just can't see it! 

## ngSwitchCase
If you Wanna compare the value of a field or a property against multiple values, use the  `ngSwitch` directive.

In the `/bootabs.component.html`:

```
<ul>
  <nav class="nav nav-pills">

    <li [class.active]="viewMode === 'map'">
      <a (click)="viewMode = 'map'">Map View</a>
    </li>

    <li [class.active]="viewMode === 'list'">
      <a (click)="viewMode = 'list'">List view</a>
    </li>

  </nav>
</ul>

<div class="contenuto" [ngSwitch]="viewMode">
  <div *ngSwitchCase="'map'">map View content</div>
  <div *ngSwitchCase="'list'">list view content</div>
  <div *ngSwitchDefault>othervise</div>
</div>
```

In the `/bootabs.component.ts` we set de default value:

```
export class BootabsComponent {

  viewMode = 'map';

}
```
 
## ngFor
Imagine you Wanna render a table and lighten the first row or the even row or display the index more stuff [here](https://angular.io/api/common/NgForOf).

```
<ul>
  <li *ngFor="let user of users; index as i">{{ i }} - {{ user.username }} - {{ user.email }}</li><br>
  <li *ngFor="let user of users; even as isEven">
    {{ isEven }} - {{ user.username }} - {{ user.email }}
    <span *ngIf="isEven">(I AM EVEN)</span>
  </li><br>
  <li *ngFor="let user of users; odd as isOdd">{{ isOdd }} - {{ user.username }} - {{ user.email }}</li>
</ul>
```

## ngClass

So before we did:

```
<span
  class="glyphicon"
  [class.glyphicon-star]="isFavorite"
  [class.glyphicon-star-empty]="!isFavorite"
  (click)="onClick()">
</span>
```

However we can be cleaner using `ngClass`. we bind ngClass to an object and inside this object we have one or more key value pairs: each `keys` represent css class and the `value` for in that key determs if the class should be redner or not.

So here we are dealing with 2 classes so we need two keys.

```
<span
  (click)="onClick()"
  class="glyphicon"
  [ngClass]="{
    'glyphicon-star': isFavorite,
    'glyphicon-star-empty': !isFavorite
  }">
</span>
``` 	 

## Custom Directives

There are times when we want to have more control over the behaviour of DOM elements.

Let's say that we have an input field for a phone number `1234567890`, now the stardard amercican phone number is `(123)456-7890`. In situation like that we use `directive`:

**1)** In the terminal we do:
`ng g d input-format`

**2)** In the `/input-format.directive` we need to import the `HostListener ` decorator: `import { Directive, HostListener } from '@angular/core';` This decorator allows us to subscribe to the event raise from the DOM element that has this attribute: `selector: '[appInputFormat]'` 

**3)** We define our methods:

```
export class InputFormatDirective {

  constructor() { }

  onFocus() {
    console.log('onFocus');
  }

  onBlur() {
    console.log('onBlur');
  }
}
```

**4)** We need to prefix them with the decorator:

```
@HostListener('blur') onBlur() {
	console.log('blur');
}
```

**5)** Back to `/app.component.html` we apply the `appInputFormat` attribute to our input field

```
<input appInputFormat type="text" name="" value="">
```

With this attribute angular is going to apply our custom directive to this input field

Now let's implement the logic to transform text to lower string.

On `blur` I need to get the value of this input field:
First we need a reference to the host element, so in our constructor we need to *inject* a reference element object:

 `constructor(private el: ElementRef) { }`
> this is a service define in angular which give us access to the actual DOM

Now let's import it on the top:

`import { Directive, HostListener, ElementRef } from '@angular/core';`

On `blur` we need to get the value of this input field: 

```
@HostListener('blur') onBlur() {
	let value: string = this.el.nativeElement.value;
	this.el.nativeElement.value = value.toLowerCase();
}
```