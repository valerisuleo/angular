# Complex Domains

Let's take our redux app to the next level by adding another component `messaging` (basically a simple counter).

- We want to create **multiple modules**:
	- 	`TodosModule`
	-  `MessageModule`

	```
	import { NgModule } from '@angular/core';
	import { CommonModule } from '@angular/common';
	import { FormsModule, ReactiveFormsModule } from '@angular/forms';
	
	import { DashboardComponent } from './dashboard/dashboard.component';
	import { WidgetComponent } from './widget/widget.component';
	
	import { BootstrapCardComponent } from '../reusable-components/bootstrap-card/bootstrap-card.component';
	import { BootstrapFormComponent } from '../reusable-components/form/bootstrap-form/bootstrap-form.component';
	import { BootstrapInputComponent } from '../reusable-components/form/bootstrap-input/bootstrap-input.component';
	import { BootstrapListGroupComponent } from '../reusable-components/bootstrap-list-group/bootstrap-list-group.component';
	
	import { TodosService } from '../services/todos.service';
	
	@NgModule({
	    imports: [
	        CommonModule,
	        FormsModule,
	        ReactiveFormsModule,
	    ],
	    exports: [
	        DashboardComponent,
	        WidgetComponent,
	        BootstrapCardComponent,
	        BootstrapFormComponent,
	        BootstrapInputComponent,
	        BootstrapListGroupComponent
	    ],
	    declarations: [
	        DashboardComponent,
	        WidgetComponent,
	        BootstrapCardComponent,
	        BootstrapFormComponent,
	        BootstrapInputComponent,
	        BootstrapListGroupComponent
	    ],
	    providers: [
	        TodosService
	    ],
	})
	export class TodosModule { }
		
	```
	

	We are gonna get a compilation **error**: *The pipe ' ' could not be found - error after Angular upgrade*
	
	This is happening because we are using *Ivy* renderer.
	
	> How can we fix it?
	
	Go to `/tsconfig.json` and:
	
	```
	"angularCompilerOptions": {
	    "enableIvy": false
	  }
	```
	
	It works! :)


- Now let's take a look at our `store` 

	```
	export interface IAppState {
	  todos: any[];
	  lastUpdate: Date; 
	  newMessages: number;
	}
	
	export const INITIAL_STATE: IAppState = { 
	  todos: [],
	  lastUpdate: null,
	  newMessages: 0
	}
	
	
	export function rootReducer(state: IAppState, action): IAppState {
    const { type, title, completed, todos, current, lastUpdate } = action;

    if (type === ACTIONS.GET && todos) {
        return tassign(state, { todos: state.todos.concat(todos) })
    }

    if (type === ACTIONS.CREATE) {
        const newTodo = { title, completed };        
        return tassign(state, { 
            todos: state.todos.concat(newTodo),
            lastUpdate
         })
    }

    if (type === ACTIONS.UPDATE) {
        const clone = [...state.todos];
        const index = clone.indexOf(current);
        const updatedItem = { ...current };

        updatedItem.completed = !updatedItem.completed;
        clone[index] = updatedItem;

        return tassign(state, { todos: clone })
    }

    if (type === ACTIONS.DELETE) {
        const { id } = current;
        return tassign(state, { todos: state.todos.filter(items => items.id !== id) })
    }
    
    if (type === ACTIONS.DELETE_ALL) {
        return tassign(state, {
            todos: [],
            lastUpdate: ''
          });
    }	
    
    ```


We want to create different `stores` to handle the `state`

1. `touch todos/store.ts`
2. we need to 
	- reshape our `interface` by removing the `newMessage` property;
	- renaming the initial state `TODOS_INITIAL_STATE`;
	- renaming our reducer <s>`rootReducer`</s> to `todosReducer`
	- **set the state** to `(state: ITodosState = TODOS_INITIAL_STATE`
	- finally add the actions

	```
	export function todosReducer(state: ITodosState = TODOS_INITIAL_STATE, action): ITodosState {
	
	    const { type, title, completed, todos, current, lastUpdate } = action;
	
	    if (type === ACTIONS.GET && todos) {
	        return tassign(state, { todos: state.todos.concat(todos) })
	    }
	
	    if (type === ACTIONS.CREATE) {
	        const newTodo = { title, completed };        
	        return tassign(state, { 
	            todos: state.todos.concat(newTodo),
	            lastUpdate
	         })
	    }
	
	    if (type === ACTIONS.UPDATE) {
	        const clone = [...state.todos];
	        const index = clone.indexOf(current);
	        const updatedItem = { ...current };
	
	        updatedItem.completed = !updatedItem.completed;
	        clone[index] = updatedItem;
	
	        return tassign(state, { todos: clone })
	    }
	
	    if (type === ACTIONS.DELETE) {
	        const { id } = current;
	        return tassign(state, { todos: state.todos.filter(items => items.id !== id) })
	    }
	    
	    if (type === ACTIONS.DELETE_ALL) {
	        return tassign(state, {
	            todos: [],
	            lastUpdate: ''
	          });
	    }
	    return state;
	}
	
	```

3. Now back to the **original store**:

	```
	import { ITodosState, TODOS_INITIAL_STATE } from './todos/store';
	import { IMessagingState, MESSAGING_INITIAL_STATE } from './messages/store';
	
	export interface IAppState {
	    tasking: ITodosState;
	    newMessages: IMessagingState;
	}
	
	export const INITIAL_STATE: IAppState = {
	    tasking: TODOS_INITIAL_STATE,
	    newMessages: MESSAGING_INITIAL_STATE
	}
	
	export function rootReducer(state: IAppState, action): IAppState {
	    return state;
	}
	```

4. We want now replace...

	```
	export function rootReducer(state: IAppState, action): IAppState {
		    return state;
	}
	```
	
	...with
	
	```
	export const rootReducer = combineReducers({
	    tasking: todosReducer,
	    newMessages: messagingReducer
	});
	```

	> This is how we **combine multiple reducers**, store the result into the root reducer and return it.

5. Now we got a an **error**: *Cannot read property 'length' of undefined*

	> How can we fix it?
	
	Because we must access to a nested obj now, We have to replace...
	
	<s>`@select() todos: any[];`</s>
	
	<s>`@select() lastUpdate: any;`</s>
	
	...with
	
	```
	 @select(s => s.tasking.todos) todos: any[];
	 @select(s => s.tasking.lastUpdate) lastUpdate: any;
	```