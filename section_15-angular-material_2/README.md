# Material Design

In this section...

- Work with advanced material elements:
	- Icons
	- Spinners
	- Date picker
	- Dialogs
- Custom theme
- Typography

## What's Angular Material?

*A library of high-quality UI components built with Angular and Typescript*.

> Why Material?

- Internationalised
- Clean and simple API
- Well-tested
- Customizable
- Fast
- Well-documented


## Install Angular Material

1. Go to [Material getting-started](https://material.angular.io/guide/getting-started);
2. `ng add @angular/material`;
3. `npm i hammerjs --save` (library for gesture support);
4. The version 9 angular is as usual a huge pain in the back so remember to disable *ivy* in `/tsconfig.json`

	```
	  "angularCompilerOptions": {
	    "fullTemplateTypeCheck": true,
	    "strictInjectionParameters": true,
	    "enableIvy": false
	  }
	```

## Import Material Elements

`<mat-checkbox>Checkbox label</mat-checkbox>`

We got now an **error**, why?

> Each element needs its specific module! [checkbox/api](https://material.angular.io/components/checkbox/api)


```
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
    imports: [
     MatCheckboxModule
  ],
  export class AppModule { }
```

### Date Pickers

Starter code:

```
<mat-form-field>
    <input matInput>
    <mat-datepicker></mat-datepicker>
</mat-form-field>
```

- We need to connect `<mat-datepicker>` with the `<input>` field above:
	- First let's assing a template variable ` <mat-datepicker #bday>`
	- Then let's add the `[matDatepicker]` directive and bind it to the template variable ` <input matInput [matDatepicker]="bday">`
	- Finally let's add a button to toggle the calendar `<mat-datepicker-toggle matSuffix [for]="bday">`


```
<mat-form-field>
    <mat-label>Choose a date</mat-label>
    <input [min]="minDate" [max]="maxDate" matInput [matDatepicker]="bday">
    <mat-datepicker-toggle matSuffix [for]="bday"></mat-datepicker-toggle>
    <mat-datepicker #bday></mat-datepicker>
</mat-form-field>
```


We got an <p style="color:red">**error**: *MatDatepicker: No provider found for DateAdapter. You must import one of the following modules at your application root: MatNativeDateModule, MatMomentDateModule, or provide a custom implementation.*</p>

> Why ??

The datepicker obj has been built on the top of the `MatNativeDateModule` so in order to use the datepicker we need to import it in our module `import { MatNativeDateModule } from '@angular/material/core';`


### Icons

1. `import {MatIconModule} from '@angular/material/icon';`
2. In `/style.scss` add `@import "https://fonts.googleapis.com/icon?family=Material+Icons";`
3. `<mat-icon></mat-icon>`
4. Go to [Material Icons](https://material.io/resources/icons/?search=add&icon=add_alert&style=baseline)
5. Select an icon *add_alert*
6. `<mat-icon>add_alert</mat-icon>`


### Progress Spinners

This component `<mat-progress-spinner>` has 2 mode:

1. `<mat-progress-spinner mode="determinate">`

	First let's pass a value:
		
	```
	<mat-progress-spinner mode="determinate" [value]="20" color="primary"></mat-progress-spinner>
	```
	
	Now let's make it dymanic: I wanna simulate a scenario where we can keep track of an action:
	
	```
	progress = 0;
	
	renderSpinner() {
	    setInterval(() => {
	        this.progress = this.progress + 1;
	    }, 20)
	    
	}
	```
	
	Now we wannat **stop** this *timer* at some point:
	
	```
	progress = 0;
	
	renderSpinner() {
	    setInterval(() => {
	        this.progress = this.progress + 1;
	        
	        if (this.progress === 100) {
	           clearInterval()
	        }
	        
	    }, 20)
	    
	}
	```
	
	Then we need to pass an argument to `clearInterval()`
	
	```
	    progress = 0;
	    timer;
	
	    constructor() { }
	
	    renderSpinner() {
	        this.timer = setInterval(() => {
	            this.progress = this.progress + 1;
	            if (this.progress === 100) {
	                clearInterval(this.timer)
	            }
	        }, 20)
	        
	    }
	```



2. `<mat-progress-spinner mode="indeterminate">`

	We use it when we don't know the progress of an action (i.e. *async* data). In this mode we don't need to set the value <s>`<mat-progress-spinner [value]="progress"`</s>
	
	Let's now simulate a scenario where we are waiting for a `res` from an API:
	
	```
	isLoaded: boolean = false;
	todos: ITodo[] = [];
	
	constructor(private service: TodosService) { }
	
	todosIndex() {
	    this.service.getCollection()
	        .pipe(
	            finalize(() => {
	                this.isLoaded = true;
	            })
	        )
	        .subscribe((response: ITodo[]) => {
	            this.todos = response;
	        });
	}
	```


## Dialogs

Those are basically *modals*. Now let's simulate a scenario where on click the modal will show to th uset and *edit* form.

- `ng g c editCourse`
- back to our dialog component:

	```
	<button mat-raised-button (click)="openDialog()">Open Dialog</button>
	```
- Let's add some logic to handle `openDialog()`:

	```
	import { MatDialog } from '@angular/material/dialog';
	
	export class DialogsComponent implements OnInit {
	
	    constructor(private dialog: MatDialog) { }
	
	    openDialog() {
	        this.dialog.open()
	    }
	```

- We pass our `EditCourseComponent` as argument to `open()` just like this:

	```
	openDialog() {
	        this.dialog.open(EditCourseComponent)
	    }
	```


Now we can see the dialog btn but when we click on it we got an <p style="color:red">**error**: No component factory found for EditCourseComponent. Did you add it to @NgModule.entryComponents</p>


> Why?

This is happening because we are trying to render dynamically a component without invoke it inside the html.

> How can we fix it?

Back to our module we need to add `entryComponents:[]`

```
@NgModule({
    declarations: [],
    
    entryComponents:[EditCourseComponent],
    
    imports: [],
    providers: [TodosService],
    bootstrap: [AppComponent]
})
```


Now it works!

We want the user also be able to close the modal:

Let's add a couple of btn to our editComponent

```
<p>Save modifications?</p>
<button mat-raised-button>yes</button>
<button mat-raised-button>no</button>
```

and now we can add this directive `matDialogClose` to close the modal:

```
<p>Save modifications?</p>
<button mat-raised-button>yes</button>
<button matDialogClose mat-raised-button>no</button>
```

Let's take it to the next level. In a real world app more likely we want to execurte some code based on the user choice. We can bind the directive to a value like this:

```
<p>Save modifications?</p>
<button matDialogClose='yes' mat-raised-button>yes</button>
<button matDialogClose='no' mat-raised-button>no</button>
```
Back to our modal we can know which one is the user choice by simply use `afterClosed()`.

> afterClosed(): Observable<any>
Gets an observable that is notified when the dialog is finished closing.

```
openDialog() {
	this.dialog.open(EditCourseComponent)
	.afterClosed()
	.subscribe((value) => {
	    console.log(value);   
	});
}
```

### Pass Data to Dialogs

Let's say that when we open the dialog we wanna pass the `id` of this obj:

```
openDialog() {
    this.dialog.open(EditCourseComponent, {
        data:{
            id: 23
        }
    })
    .afterClosed()
    .subscribe((value) => {
        console.log(value);   
    });
}
```

Now on the **receiving** side we should be able to receive and read this data: to do that we need to use the a decorator:

`constructor(@Inject()) {}`

> **Note** `Inject` MUST be titlecase otherwise we'll get an error.

Now this decorator takes as first arg an `InjectionToken` that has defined in `MAT_DIALOG_DATA` module and as second arg the `data` obj we want to read:

```
constructor(@Inject(MAT_DIALOG_DATA) data: any) {
  console.log(data); 
}
```


## Custom Theme

### Sass: understanding `@mixin`

What I usually do is to create a common style class such as:

```
.center-styles{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

and apply `@extend` to reuse it where needed

```
p{
	  @extend .center-styles;
	}
```

Now `@mixin` is even more powerful and I'll show you why:

```
@mixin center($position) {
	position: $position;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
	
.box {
    @include center(absolute);
}
	
.modern-box {
   @include center(relative);
}
```

Now that we better understand `@mixin` it's time to create a custom them:

1. Go to [Color Tool](https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=02a2ee) to get a better idea of *material color system*
2. `touch mat-components/theme.scss`
3. In `angular.json`:

	```
	"styles": [
	  "src/styles.scss",
	  "src/app/mat-components/theme.scss"
	]
	```

4. Back to `theme.scss`:

	4.a) get access to material's theming file and the Mixin that renders all of the 
	
	```
	@import "~@angular/material/_theming";
	@include mat-core();
	```
	
	4.b) write our custom theme:
	
	```
	$app-primary: mat-palette($mat-blue, 600);
	$app-accent: mat-palette($mat-yellow, 700);
	$app-warn: mat-palette($mat-red);
	
	$app-theme: mat-light-theme($app-primary, $app-accent, $app-warn);
	```
	
	>We can also have a **dark-theme**:
	
	```
	$app-theme: mat-light-theme($app-primary, $app-accent, $app-warn);
$app-theme: mat-dark-theme($app-primary, $app-accent, $app-warn);
```
	
	4.c) finally ovewrite the original theme with our custom theme:
	
	```
	@import "~@angular/material/_theming";
	@include mat-core();
	
	$app-primary: mat-palette($mat-blue, 600);
	$app-accent: mat-palette($mat-yellow, 700);
	$app-warn: mat-palette($mat-red);
	$app-theme: mat-light-theme($app-primary, $app-accent, $app-warn);
	
	@include angular-material-theme($app-theme);
	```


## Typography

Docs at: [typography](https://material.io/design/typography/the-type-system.html#type-scale)


```
// Represents a collection of typography levels.

@function mat-typography-config(
  $font-family:   'Roboto, "Helvetica Neue", sans-serif',
  $display-4:     mat-typography-level(112px, 112px, 300, $letter-spacing: -0.05em),
  $display-3:     mat-typography-level(56px, 56px, 400, $letter-spacing: -0.02em),
  $display-2:     mat-typography-level(45px, 48px, 400, $letter-spacing: -0.005em),
  $display-1:     mat-typography-level(34px, 40px, 400),
  $headline:      mat-typography-level(24px, 32px, 400),
  $title:         mat-typography-level(20px, 32px, 500),
  $subheading-2:  mat-typography-level(16px, 28px, 400),
  $subheading-1:  mat-typography-level(15px, 24px, 400),
  $body-2:        mat-typography-level(14px, 24px, 500),
  $body-1:        mat-typography-level(14px, 20px, 400),
  $caption:       mat-typography-level(12px, 20px, 400),
  $button:        mat-typography-level(14px, 14px, 500),
  // Line-height must be unit-less fraction of the font-size.
  $input:         mat-typography-level(inherit, 1.125, 400)
) {
```

![](https://www.dropbox.com/s/whm3cow2s0ifnfv/mat-typo.png?raw=1)

`mat-typography-level(20px, 32px, 500),`

- first arg: `font-size`;
- second arg: `line-height`;
- third arg: `font-weight`;


Now back to `theme.scss`:

```
$app-typography: mat-typography-config(
    $font-family: '"Open Sans", "Helvetica Neue", sans-serif',
    $headline: mat-typography-level(34px, 32px, 700)
);

// finally we can apply our changes
@include angular-material-typography($app-typography);
```












































