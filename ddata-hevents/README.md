# Displaying Data and Handling Events

### In this section...

- Display Data
- Apply classes / styles dynamically
- Format Data using *pipes*
- Handle Events

## Property Binding

 So earlier we had a look at *interpolation* 
 `<h1>{{ course }}</h1>`
 
 Let's to the same thing but this time using *property binding*
 `<h1 [textContent]="title"></h1>`
 
 **NB** Property Binding works only one way: from component to the DOM.
 
## Attribute Binding

Long story short we can use property binding only if we have a correspondent in the HTML

```
<table>
  <tr>
    <td [colspan]="colspan"></td>
  </tr>
</table>
```

The code above will not work becasue `colspan` is not a property present in the HTML it's an **attribute**.
In order to use it we need to tell to angular  that's an attr.

```
<table>
  <tr>
    <td [attr.colspan]="colspan"></td>
  </tr>
</table>
```

## Class and Event Binding


Sometimes we want to add a class `.active` to an element based on some conditions:

**A** Make a btn

**B** Make a function to do something onClick()


```
  onClick() {
    console.log('uhhh you clicked me!')
  }
```


**C** By default our `.active` is `false`. We want to add the active class when we click on the btn and remove it when we click again (*toggle*)

```
  isActive = false;

  onClick() {
    this.isActive = !this.isActive;
    console.log('uhhh you clicked me!')
  }
```
**D** We need to bind our class to the HTML:

```
  <div class="child" [class.active]="isActive"><p>I am pinky</p></div>
  <div class="child" [class.active]="isActive"><p>I am pinky</p></div>
  <div class="child" [class.active]="isActive"><p>I am pinky</p></div>

<button class="btn btn-primary" (click)="onClick()">Toggle</button>
```
****

### $event

Sometimes we need to get accesso to the event obj we have to pass it as argument:

```
  onClick($event) {
    console.log($event)
  }
```

```
<button class="btn btn-primary" (click)="onClick($event)">Toggle</button>
```

****

## Template Variables
Let's imagine we want get the value of an input field:

```
  onKeyUp($event) {
    console.log('enter pls')
  }
```

```
  <input (keyup.enter)="onKeyUp($event)" />
```

Now we have an inut field the return a message in the console when we press `enter`.
We want now beign able to get the **value**:

```
  onKeyUp($event) {
    console.log($event.target.value);
  }
``` 
Now in angular we have a better way to get the value: we can declare a variables that references this input field. We call it *Template Variable*

```
  <input #email (keyup.enter)="onKeyUp(email.value)" />
```

and then we can do:

```
    onKeyUp(email) {
    console.log(email);
  }
```

## Two Way Binding


```
  <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
```

In order to use ngModel we need to import it into the `app.module`

`import {NgModule} from '@angular/core';`

## Pipes
We use pipes to format data.

**Built-in Pipes**:

- Uppercase
- Lowercase
- Decimal
- Currency
- Percent

 


## Adding Bootstrap

1. Install bootstrap: `npm i bootstrap@3.3.7 --save`
2. Go to `styles.css` and `@import "~bootstrap/dist/css/bootstrap.css";`

