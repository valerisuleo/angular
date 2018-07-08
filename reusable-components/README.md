# Building Reusable Components

### In this section...

- Pass Data
- Raise Custom Events
- Apply Styles
- Shadow DOM

## Component API	

In order to make a component more resusable we need to add a bunch of **input** and **output** properties.

*We use input properties to pass input/state to a component*

*We use output properties to raise events form a component*

The combination of input and output component makes what we call **Component API**

Our favorite component does not have an API because is missing both Input and Output Property

```
<favourite [isFavourite]="post.isFavorite"></favourite>
```

## Input Properties
Back to our `favourite.component.ts` we wanna mark this field:

```
isFavorite: boolean;
```
as an *input* property:


1. `import { Component, OnInit, Input } from '@angular/core';`
2. `@Input() isFavorite: boolean;`

### Aliasing Input Properties
It's a good practice using *alias* with input decorator to have a more maintainable code:

1. In the `/favorite.component.ts`: 
	`@Input('hakunamatata') isFavorite: boolean;`

2. In the *host* component `host.component.html`:
 
	```
	<favorite [hakunamatata]="post.isFavorite"></favorite>
	```
 
## Output Properties
Now let's take this thing to the next level: I want to be notified when a user click on the favorite component. So I want this component to raise a *custom event* like `change`:
```
<favorite [hakunamatata]="post.isFavorite" (change)="onFavoriteChanged()"></favorite>
```
that we can bind to a method in our host component:

```
  onFavoriteChanged() {
    console.log('favorite has been clicked!');
  }
```

> We can't see anything in the console yet!

We need to extend our favourite component so it raises the change event when the user click on this component

> How we do that?

We need to declare an *output* property:

1. `import { Component, OnInit, Input, Output } from '@angular/core';`

2. I'm going to declare a field here and the name of this field should be exactly the same as the event we want to raise: `change;`

3. now we should decorate this field with our output decorator `@Output() change`

4. we should also initialise this field to an instance of the **event emitter** class: `@Output() change = new EventEmitter()`;

	**N.B.** Since EventEmitter is not a primitive type in typescript or JS, we need to use the `new` operator to create an instance of this class.

5. Rememer to import it: `import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';`

6. Finally we wanna raise an event. Now here we have a method call `emit()` and we use that to raise or published an event, which basically means notify to the others that something is happening.
 
	```
onClick() {
	this.isFavorite = !this.isFavorite;
	this.change.emit();
  }
  ```
  
> Now we get a message in the console!

## Passing Event Data
