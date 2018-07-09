# Directives

### In this section...

- ngFor
- ngIf
- ngSwitchCase
- ngClass
- ngStyle
- Building custom directives

##ngIf

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




