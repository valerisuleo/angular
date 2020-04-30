# Directives

In this section...

- ngIf
- ngContent
- ngSwitchCase
- ngFor
- ngFor and Trackby
- ngClass
- ngStyle
- Building custom directives
 

## ngIf & ngTemplate

There are times when we wanna show/hide part of the page base on some conditions

```
<ng-container *ngIf="isToggle
then hidden
else showed">
</ng-container>


<ng-template #showed>
    <bootstrap-card>
        <div class="header">
            <h3>Showed</h3>
        </div>
        <div class="body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, voluptatem! Tenetur, vitae tempora suscipit dolorem eligendi amet error omnis beatae deserunt voluptate excepturi iure cumque in recusandae, culpa, ad vel?
        </div>
    </bootstrap-card>
</ng-template>

<ng-template #hidden>
    <bootstrap-card class="m-5">
        <div class="header">
            <h3>Hidden</h3>
        </div>
        <div class="body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, voluptatem! Tenetur, vitae tempora suscipit dolorem eligendi amet error omnis beatae deserunt voluptate excepturi iure cumque in recusandae, culpa, ad vel?
        </div>
    </bootstrap-card>
</ng-template>


<button class="btn btn-primary m-5" (click)="isToggle = !isToggle">Toggle Card</button>
```

> Keep in mind that when we use `ngIf` we are removing an element from the DOM  while `[hidden]` will just make invisible en element but it's stille there.


## ngContent

Let's imagine we wanna create a `bootstrap-card` component

```
<div class="card">
    <div class="card-header">
        Header
    </div>
    <div class="card-body">
        Body
    </div>
</div>
```

Now we don't wanna hardcode every time the content for label and body. I want to be able to 

```
<div class="card">
    <div class="card-header">
       <!-- inject text/mark-up-->
    </div>
    <div class="card-body">
        <!-- inject text/mark-up-->
    </div>
</div>
```

> How can we do that?

```
<div class="card">
    <div class="card-header">
       <ng-content select=".header"></ng-content>
    </div>
    <div class="card-body">
        <ng-content select=".body"></ng-content>
    </div>
</div>
```

Back to the parent component:

```
<bootstrap-card>

    <div class="header">
        Featured
    </div>

    <div class="body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    
</bootstrap-card>
```

> **N.B.** The `class` names are matching the `select` in the card component. that's how we can inject our mark-up

####### Refactoring with `ngContainer`

```
<h1>ng-content</h1>

<bootstrap-card>

    <ng-container class="header">
        Featured
    </ng-container>

    <ng-container class="body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </ng-container>
    
</bootstrap-card>
```

We've replaced <s>`<div>`</s> with `<ng-container>` in this way we can avoid to add unnecessary.

## ngSwitchCase

Imagine we wanna build a page to display properties in a `list` or in a `table`

> Can't we do it by using `ngIf` ?

Yes we could but we might have multiples tabs and that's when *ngSwitchCase* becomes very useful.

1. Let's build our `pills` component

	```
	<ul class="nav nav-pills mt-5" id="pills-tab" role="tablist">
	    <li class="nav-item">
	        <a class="nav-link" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">
	            <!-- inject mark-up -->
	        </a>
	    </li>
	</ul>
	```
	
2. Back to our parent component let's create an `arr` of tabs and let's decide which one will be the default one.

	```	
	tabs: ITab[] = [
        {
            name: 'List View',
            viewMode: 'list'
        },
        {
            name: 'Table View',
            viewMode: 'table'
        },
    ];
    
    	viewMode = 'list';

    ```

3. It's time now to render our item

	```
	<bootstrap-tab class="m-3" *ngFor="let tab of tabs" (click)="toggleActiveClass(tab)" [tab]="tab" [viewMode]="viewMode">
	
	        <ng-container class="tab-label">
	            {{ tab.name }}
	        </ng-container>
	
	    </bootstrap-tab>
	```



	> We need to tell to our `pills` component which one is the *default* view to display (`[viewMode]="viewMode"`) and also on which tab we have just clicked (`(click)="toggleActiveClass(tab)"`)
	
	```
	viewMode = 'list';

    tabs: ITab[] = [
        {
            name: 'List View',
            viewMode: 'list'
        },
        {
            name: 'Table View',
            viewMode: 'table'
        },
    ];

    toggleActiveClass(current: ITab) {
        this.viewMode = current.viewMode;
    }

    ```

4. Back to our `pills` component we want to add the `active` class to the current tab
	
	```
		<ul class="nav nav-pills mt-5" id="pills-tab" role="tablist">
	    <li class="nav-item">
	        <a class="nav-link" [class.active]="viewMode === tab.viewMode" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">
	            <ng-content select=".tab-label"></ng-content>
	        </a>
	    </li>
	</ul>
	```

5. So far so good. We want know to injec our mark-up in order to diplay our data based on the tab selected; to do we use `ngSwitchCase`

	```
	<ul class="nav nav-pills mt-5" id="pills-tab" role="tablist">
	    <li class="nav-item">
	        <a class="nav-link" [class.active]="viewMode === tab.viewMode" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">
	            <ng-content select=".tab-label"></ng-content>
	        </a>
	    </li>
	</ul>
	
	
	<div class="col mt-5" [ngSwitch]="viewMode">
	    <div *ngSwitchCase="tab.viewMode">
	        <ng-content select=".tab-content"></ng-content>
	    </div>
	</div>
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


## ngFor and Trackby

So let's simulate a scenario where we get this data from the server:

```
    courses = [
        { id: 1, name: 'course1'},
        { id: 2, name: 'course2'},
        { id: 3, name: 'course3'},
    ]
    
    
<button (click)="loadCourses()"></button>
<ul>
    <li *ngFor="let item of courses">
        {{item.name}}
    </li>
</ul>

```

Everytime we click this `btn` angular is rebuilding the whole `<ul>` element. So if we redownload course with `id:1`, everytime we redownload that course, it's gonna be a different obj in the memory even though they are equal.

> Now we wanna instruct Angular to use a different mechanism to track obj.

Instead of tracking them by their identity or reference in the memory we wanna track them by `id`. So if we redownload the obj and none of the properties are chaged Angular wont't re-render the DOM element:

```
<ul>
    <li *ngFor="let item of courses; trackBy: trackCourse">
        {{item.name}}
    </li>
</ul>


trackCourse(index, course) {
    return course ? course.id : undefined;
}
```

With this method we change how Angular tracks obj.




## ngClass

Before we get started, let's take a look at what we want to create.

![angular-donuts](https://cloud.githubusercontent.com/assets/40461/9590520/0e2c19ac-502d-11e5-9df5-8b26429eb203.jpg)

As you can see, we have a couple of input boxes inside a form.

- One input to add the flavour of a donut
- One input to add the size of a donut
- A checkbox to "eat" a donut (a bit silly...)
- And a list of donuts


### `ngClass` (Array Syntax)

We can add multiple classes using multiple `ngModel`s. We just need to use slightly different syntax to apply the classes.

Let's try it out and add a new input box for the size of the donut that you want to add onto your list!

```
<label for=size>size</label>
<input [(ngModel)]="donut.size" type="text" name=size id=size placeholder="what's your size?">
```

Now, we can add this class to the `h2` using the array syntax:

```
<h2 
[ngClass]="[donut.flavor + ' ' + donut.size]">
	{{donut.flavor}} {{donut.size}}
</h2>
```

You can now change both the size and the flavor of your Donut!


### `ngClass` (Evaluated Expression)

The above examples are quite easy to understand, but when you start looking at real world use-cases - you might use another syntax. What is perhaps more likely is that you choose a class based on the evaluation of an expression.

When evaluating an expression, you need to use `{}` (single-bracket notation) so that Angular knows that it needs to work something out.

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

> each keys represent css class and the value for in that key determs if the class should be render or not.


**Note:** In oreder to use multiple classes + evaluated expression we have to write something like this:

```
<h2 
[ngClass]="[donut.flavor + ' ' + donut.size]" 
[class.eaten]="donut.eaten === true">
    {{donut.flavor}} {{donut.size}}
</h2>
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


































