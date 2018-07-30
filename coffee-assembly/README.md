# Create a Search Pipe to Dynamically Filter results with Angular

_The array of objects, the html and css belong to **General Assembly.**_

## Background

In Angular JS there were Filters which allowed us to format and transform data. Angular JS came with a few built in Filters , such as:

- uppercase — converts “Hello” to “HELLO”
- lowercase — converts “Hello” to “hello”
- currency — converts 123 to $123.00

A common built in Filter was called `filter`.

A very common use case of this is to have an input box where a user enters a search text and the results are filtered appropriately. Here’s some example code which does that:

_the list of characters we display in the ul is declared in the charactersCtrl as $scope.characters = ['Finn the human', 'Jake the dog', etc...]_


```
<input ng-model="searchText" placeholder="enter search term here">
<ul>
	<li ng-repeat="c in characters | filter : searchText">
	{{ c }}
	</li>
</ul>
```

The code above uses the `filter` Filter to return a subset of our characters array.

## Angular (version 2/6) — Pipes
A few things have changed in Angular. First of all, tools that allow us to transform data are no longer called *Filters* they are now called *Pipes*.

Also Angular did not come with the order by or filter pipes that were supplied in AngularJS

>The reason why they are no longer provided is because they are expensive. This pipes need to observe state changes and execute the filter function whenever a change occurs. For instance, the filter pipe must always keep track of any changes to the search text value so it can return the appropriate sub array to the template view. This can lead to a laggy user experience.


## The Coffee Filter
if we still want to filter some results with a search bar, we can create our own filter pipe. I’ll show you how to do that here with Angular.

### Create some list data in a fake service and display it in the template

1. `ng g s fakequery`
2.  Add some data to `/fakequery.service.ts`
	
	```
		import { Injectable } from '@angular/core';
	
	@Injectable()
	export class FakequeryService {
	
	  getCoffee() {
	    return [{
	    id: '110866',
	    name: 'Jamaica Blue Mountain Coffee',
	    image: 'https://d2qwzu24wcp0pu.cloudfront.net/whittard/product/9a221cc6.110866.jpg/280x280.fit.110866.jpg',
	    price: 200.95,
	    origin: 'Jamaica',
	    strength: 4.9754,
	    roast: 20000
	  },{
	    id: '111047',
	    name: 'Guatemala Elephant Coffee',
	    image: 'https://d2qwzu24wcp0pu.cloudfront.net/whittard/product/30409364.111047.jpg/280x280.fit.111047.jpg',
	    price: 34.12,
	    origin: 'Guatemala',
	    strength: 4,
	    roast: 30000
	  },{
	    id: '274233',
	    name: 'Ethiopia Yirgacheffe Coffee',
	    image: 'https://d2bvpivebkb899.cloudfront.net/whittard/product/dcc2dc96.274233.jpg/280x280.fit.274233.jpg',
	    price: 28.88,
	    origin: 'Ethiopia',
	    strength: 3.3246,
	    roast: 10000
	  }];
	  }
	
	  constructor() { }
	
	}
	``` 

3. Back to `/coffee.component.ts` we need to:
	- `import { FakequeryService } from '../fakequery.service'`
	- call our `service`

4. Now lets modify `coffee.component.html` to display the coffee list. Add this to the html file:

	```
	<div *ngFor="let coffee of coffeeList"></div>
	```

5. Also we need to hookup the `input` field with the logic. To do that we use `[(ngModel)] = query`. As we already know we must add the following import statement at the top of `/app.module.ts`: `import { FormsModule } from '@angular/forms';`.

### Create the Filter Pipe

1. Make a pipe: `ng g p filter`
2. Let’s populate the pipe with code for the filter.

	
	```
	import { Pipe, PipeTransform } from '@angular/core';
	
	@Pipe({
	  name: 'filter'
	})
	
	export class FilterPipe implements PipeTransform {
	
	  transform(items: any[], query: string): any[] {
	    if (!query) {
	      return items;
	    }
	    return items.filter(function(el: any){
	      return JSON.stringify(el).toLowerCase().includes(query.toLowerCase());
	    })
	  }
	}
	```
	>transform is a method and it takes 2 args:
 	`items` (I named it 'items' but could be anything).
 	`query` is the name of the [(ngModel)] to hooked up our input field


### Use the Filter Pipe

In order to use the pipe, first we need to import it into the `/app module`: `import { FilterPipe }from './filter.pipe';.` Also add it to the array of declarations in the NgModule decorator.

Our `app.module.ts` file should now look like this:

```
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FilterPipe} from './filter.pipe';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FilterPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

Now you can use the filter pipe in `/app.component.html`:

```
<input [(ngModel)]="query" placeholder="coffee filter...">	

<div *ngFor="let coffee of coffeeList | filter : query">
```

Now type some text into the box and see that your list being dynamically filtered!
