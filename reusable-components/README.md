# Building Reusable Components

### In this section...

- Pass Data
- Raise Custom Events
- ngContent
- ngContainer


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
Back to our `/favorite.component.ts` we wanna mark this field:

```
isFavorite: boolean;
```
as an *input* property:


1. `import { Component, OnInit, Input } from '@angular/core';`

2. `@Input() isFavorite: boolean;`

### Aliasing Input Properties
It's a good practice using *alias* with input decorator to have a more maintainable code:

**1** In the `/favorite.component.ts`: 

```
@Input('hakunamatata') isFavorite: boolean;
```

**2** In the *host* component `/host.component.html`:
 
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


### Aliasing Output Properties
As we have already seen before, it's always best practice using *alias*:

```
@Output('outputAlias') change = new EventEmitter();
```

```
<favorite [hakunamatata]="post.isFavorite" (outputAlias)="onFavoriteChanged($event)"></favorite>
```


## Passing Event Data
Currently we are displaying just a simple message in the console.
We don't know if the user has marked the obj as favorite or not.
So we need to change our implementation and pass some data when raising this event.

**01)** Back in our `/favorite.component`:

```
onClick() {
	this.isFavorite = !this.isFavorite;
	this.change.emit(this.isFavorite);
  }
```

This is a simple Boolean and in our event handler we get a simple Boolean value.

**02)** Back in our `/host.component`:

```
  onFavoriteChanged(isFavorite) {
    console.log('isFavorite', isFavorite);
  }
```

**03)** Finally in the `/host.component.html`:

```
<favorite [hakunamatata]="post.isFavorite" (change)="onFavoriteChanged($event)"></favorite>
```

The DollarEvent, here because we are dealing with custom component, could be anything that we pass when we raising the event: in this case it's going to be simple boolean value.

> So this is how we pass data along with the event.

In a real world application we want to pass something more complicated like an object.

```
  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({
      newValue: this.isFavorite
    });
  }
```

In the `/host.component` instead of the simple Boolean we're going to receive an object. We can call it `eventArgs`

```
  onFavoriteChanged(eventArgs) {
    console.log('newValue', eventArgs);
  }
```

### Refactoring
This is good but we can do a bit better:

We may wanna passa better information with our data like:

```
  onFavoriteChanged(eventArgs: {newValue: boolean}) {
    console.log('newValue', eventArgs);
  }
```

But this is a little bit verbose... We may want to use `Interface`

```
interface FavoriteInterface {
  newValue: boolean
}

@Component({
  selector: 'host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})

export class HostComponent {

    post = {
    title: 'title',
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FavoriteInterface) {
    console.log('newValueObj', eventArgs);
  }
}
```

However best practice is to move our interface inside `/favorite.component`:

```
export class FavoriteComponent {

  @Input('hakunamatata') isFavorite: boolean;
  @Output() change = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({
      newValue: this.isFavorite
    });
  }
}

export interface FavoriteInterface {
  newValue: boolean
}
```

And then export it to the `/host.component`:

```
import { FavoriteInterface } from '../favorite/favorite.component';

export class HostComponent {

  onFavoriteChanged(eventArgs: FavoriteInterface) {
    console.log('newValueObj', eventArgs);
  }
}
```

## ngContent
We want to build are boostrap panel component

```
<div class="panel panel-default">
  <div class="panel-heading">Heading</div>
  <div class="panel-body">Body</div>
</div>
```

Now I don't wanna hardcode this heading and body labels; I want the consumer of this panel component being able to inject text or markup into this component.


So here we want to add **2 injections points**: so the consumer of this panel component can provide content into those injection points.

```
<div class="panel panel-default">

  <div class="panel-heading">
  	<ng-content></ng-content>
  </div>
  
  <div class="panel-body">
  	<ng-content></ng-content>
  </div>
  
</div>
```

Now we have 2 <ng-content> and some how we need to be able distinguish them, we use the `select` attribute.
> With `select` we can reference a class an ID or an element. 

```
<div class="panel panel-default">

  <div class="panel-heading">
    <ng-content select=".headingbooty">
    </ng-content>
  </div>
  
  <div class="panel-body">
    <ng-content select=".bodybooty">
    </ng-content>
  </div>
  
</div>
```

Back to the `/app.component.html`

```
<bootstrapanel>
  <div class="headingbooty">heading</div>
  <div class="bodybooty">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
  </div>
</bootstrapanel>
```

> So if you are building reusable component and you want the consumer of this component to be able to provide custom content use `ng-content` 