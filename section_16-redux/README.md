# Redux

In this section...

- What is Redux
- When to use it and why
- How to add redux to an existing app
- Redux DevTools

## What is Redux

*A library that helps you to manage the state of your application.*

In other words helps you to keep in sync multiple **components in line** that are sharing the same `state`.

Sure we could use `event emitter` be to do that but if we are dealing with a large code base we'll find ourself very soon in into an *event spaghetti* and to track down what happend to the state we'll be a nightmare.

*Facebook* came across this problem back in 2014 and that's why the introduce the *Flux* architecture. Now *Redux* is a simpler version that helps to:

> Manage the application state in a **predictable** way.

#### Benefits

- Predictable application state
- Decoupled architecture
- Testability
- Great tooling
- Undo/redo

Now all these benefits come with a **cost**!

#### When to use Redux?

- Independent copies of the same data in multiple places
- Multiple views that need to work with the same data and be in sync
- Data can be uploaded by multiple users
- Data can be uploaded by multiple actors


## Building Blocks of Redux

![Imgur](https://www.dropbox.com/s/r3hn1km2i8jsfsu/bblocks.png?raw=1)

### The Store

*A single JS object that contains the state of the application.*

> We can think of it as local client side db.



![Imgur](https://www.dropbox.com/s/870dc6sytd0b6p7/store.png?raw=1)


### Actions

*Plain JS objects that represents something that has happened.*


```
{ type: '	MARK_AS_READ' }

{ type: '	POST_MESSAGE', body: '...' }
```

### Reducer

*A function that speciefies how the state changes in response to an action.*

We can think of it as an event handler that determins how the state has changed.

> A reducer does **not** modify the state. It returns a new state! That is responsability of the store, that keeps the state and update it when necessary.


Now these reducers should be **pure functions**.

<h5 style="color:dodgerBlue">What's a Pure Function?</h5>

*A funtion is pure if given an input we get always the same output no matter how many times we called that function*

- Same input -> Same outpu
- No side effects

```
<!--IMPURE-->

functions increment(input) { 		// mutating arguments
	input.count++'
}


functions increment(input) { 		// making backend calls
	service.addMessage(...);
}

functions increment(input) { 		// the output is different every time
	input.count+= Math.random();
}


<!--PURE-->

functions increment(input) {
	return { count: input.count + 1 };
}

```


In redux reduce `fn` always takes 2 args: state and action...

```
function reducer(state, action) {

}
```

...then based on the action type, it returns a new state.


```
function reducer(state, action) {
	switch (action.type) {
		case: 'INCREMENT':
			return { count: state.count + 1}
	}
}
```

## Installing Redux

We have some options here the most poplar:

- `https://ngrx.io/`
- `https://www.npmjs.com/package/@angular-redux/store`

For this lesson we picked the latter.

> **Note**: At this time during the installation I've ecountered few issues related to the version stability. So here's what I've done:

1. `npm i redux@4.0.1` - the last stable version;
2. `npm i @angular-redux/store`;
3. `npm install --save redux-devtools-extension`;


### Quick Start

- `touch store.ts`

	```
	export interface IAppState {
	    // determines the shape of tour store
	    
	}
	export function rootReducer(state, action) {
	    // at this stage it does nothing.
	    return state;
	}
	```

- Back to `AppModule`

	```
	import { NgReduxModule, NgRedux } from '@angular-redux/store';
	import { IAppState, rootReducer } from './store';
	.
	.
	.
	export class AppModule { 
	    constructor(ngRedux: NgRedux<IAppState>) {
	        ngRedux.configureStore(rootReducer, {});
	    }
	}
	```


## Working With Actions

This is what we do in a typical angular app. We modify the state directly (`this.counter++;`)...

```
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'work-with-redux2';

    counter: number = 0;

    increment() {
        this.counter++;
    }
}
```

...but when we use `redux` we **don't** modify the state directy here.

![Imgur](https://www.dropbox.com/s/r518spvpkvwuuqu/dataflow.png?raw=1)

Instead:

1. we *dispatch* an `action`. 
2. This action goes in the `store` which as we know holds the `rootReducer()`, 
3. the `reducer` look at the action and based on the type of the action will return a new state. 
4. Finally the store will update the state internally. 

> How can we implement all this stuff?



- In the `AppComponent` we inject `ngRedux` in both *constructor* and *increment* method. Instead of modify the state directly we dispatch an action.

	```
	import { NgRedux } from '@angular-redux/store';
	import { IAppState } from './store';
	
	export class AppComponent {
	
	    counter: number = 0;
	
	    constructor(private ngRedux: NgRedux<IAppState>) {}
	
	    increment() {
	        // this.counter++;
	        this.ngRedux.dispatch({type: 'INCREMENT'});
	    }
	}
	```

- Back to `Store` we modify the `rootReducer()` and add the logic for the increment action. We also have to update the `IAppState` 

	```
	export interface IAppState {
	    // determines the shape of tour store
	    counter: number;
	}
	
	
	export function rootReducer(state: IAppState, action): IAppState {
	    switch (action.type) {
	        case 'INCREMENT': return { counter: state.counter + 1 }
	    }
	    return state;
	}
	```

- In `AppModule` we set the initial state of our store `{counter: 0}`

	```
	export class AppModule { 
	    constructor(ngRedux: NgRedux<IAppState>) {
	        ngRedux.configureStore(rootReducer, {counter: 0});
	    }
	}
	```

- Back to `AppComponent` Let's test if this is working so far. `ngRedux` is an _**Observable!**_

	```
	   constructor(private ngRedux: NgRedux<IAppState>) {
	        ngRedux.subscribe(() => {
	            console.log(ngRedux.getState());
	        })
	    }
	```

	In the console we can see the counter is working!  ^_^


### Refactoring

Issues:

**1)** Hardcoded string `'INCREMENT'`

- `touch actions.ts`
- `export const INCREMENT = 'INCREMENT';`


**2)** Set an initial state

- In `Store`

	```
	export const INITIAL_STATE: IAppState = {
	    counter: 0
	}
	```

- Back to `AppModule` now we don't need anymore to manually update the initial state.

	```
	export class AppModule { 
	    constructor(ngRedux: NgRedux<IAppState>) {
	        ngRedux.configureStore(rootReducer, INITIAL_STATE);
	    }
	}
	```

## The `@Select` Decorator

At this point when we click on the `btn` the view isn't updating; **we need to read the state**

```
  constructor(private ngRedux: NgRedux<IAppState>) {
        ngRedux.subscribe(() => {
            const store = ngRedux.getState();
            this.counter = store.counter;
        })
    }
```

It works! but there are 2 problems with these implementation:

1. Too verbose;
2. We have to `unsubscribe` everytime otherwise we'll end up with memory leak problems;

	```
	constructor(private ngRedux: NgRedux<IAppState>) {
	        const subscription = ngRedux.subscribe(() => {
	            const store = ngRedux.getState();
	            this.counter = store.counter;
	        })
	    }
	```


> !!! There's a better way using **Async Pipe**. We can `select` a slice of the store as *Observable* and then in the template we can use the *async pipe* to unwrap it. **With this we don't need explicitly do the usubscribe**.

Here's where the `select` decorator enter in action:


```
export class AppComponent {

    // counter: number = 0;
    @select() counter;

    constructor(private ngRedux: NgRedux<IAppState>) {
    	// we don't need anymore the subscription
    }
}
```

and in `app.component.html`

```
<p>
    Counter: {{counter | async }}
</p>
```

**it works!!**


## Avoiding State Mutation

What if had multiple properties?

```
export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case INCREMENT: return { counter: state.counter + 1, prop1: state.prop1, prop2: state.prop2 }
    }
    return state;
}
```

> How can we fix it?

By making a **copy** of the `state` obj.

> `Object.assign()` with this method we can combine multiple obj into an obj. If my target obj is `{}` and my source obj is `state`, I can combine this state obj with another obj `{counter: state.counter + 1 }` 

```
export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case INCREMENT: 
        return Object.assign({}, state, { counter: state.counter + 1 }) 
        
    }
    return state;
}
```

There's a tiny problem with this implementation:

1. As we know `IAppState` represents the shape of out store and by using `Object.assign()` we can easily change its shape without get any compilation error:

```
return Object.assign({}, state, { counter: state.counter + 1, isOpen:true }) 
```

> How can we fix it?

By using **tassign**. A simple wrapper for fixed-arity, subset-typed, non-mutating `Object.assign.`

- `npm i tassign`;
- `return tassign(state, { counter: state.counter + 1 });`


2. The second problem is:

```
export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case INCREMENT:
         
        state.counter++ //NOTHING STOP ME FROM MUTATING THE ORGINAL STATE!!
        
        return tassign(state, { counter: state.counter + 1 });        
    }
    return state;
}
```

> How can we fix it?

- `npm install immutable`

We can use *immutable obj* however the code is a bit verbose and we lose `tassign`.

> Personal Note: I don't like it but if it will be need it watch lesson 241 to implent the logic


## Redux DevTools

1. Install [Chrome Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
2. `import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';`
3. We need to update our constructor as well

```
export class AppModule { 
    constructor(
    ngRedux: NgRedux<IAppState>, 
    
    devTools: DevToolsExtension
    
    ) {
        ngRedux.configureStore(rootReducer, INITIAL_STATE);
    }
}
```

> In order to use *devtools* we have to pass 2 more args:
> 
> - The *third* arg is where we can add a **middleware**: *a middleware is an extension point so we can execute some code from the moment an action is dispatched to the monent it reaches a reducer* (i.e. login).
> - The *forth* arg is an array of `enhancer` and this is where we are gonna use the devtool extension.

```
export class AppModule { 
    constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
        ngRedux.configureStore(rootReducer, INITIAL_STATE, [], [devTools.enhancer()]);
    }
}
```

> This is going to have some cost so we wanna **run it only in dev mode!**

```
import { NgModule, isDevMode } from '@angular/core';

export class AppModule { 
    constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {

        const enhancer = isDevMode() ? [devTools.enhancer()] : [];
        
        ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancer);
    }
}
```

Now to test if it's working back to chrome we should see the *DevTool* enlightened. 

![Imgur](https://www.dropbox.com/s//uofn37t1wsbfvnc/devtool.png?raw=1)
@