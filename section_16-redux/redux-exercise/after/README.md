# Redux

## Avoiding Array Mutations

In this app, we’re working with an array of items (todos), and avoiding the mutation of this array is the challenging part of this exercise. But with the following tips, you’ll realise it’s not as challenging as you might think.

Let’s imagine we have the following array of complex objects:

`const source = [ {...}, {...}, {...} ];`

### Adding an item

Instead of the `push()` method, we use the `concat()` method to add an item to an array. 

> The `push()` method mutates the original array, whereas `concat()` returns a new array.

`const target = source.concat(newItem);`


### Removing an item

We use the `filter()` method to create a new array that excludes the given item:

`const target = source.filter(i => i.id !== id);`

Now, target includes all items in the source except the one with the given id.

### Updating an item

We have to find the copy all items before and after the given item to the new array, and use `tassign()` to get a copy of this item and apply mutations before placing it in the target at the right position.

1. So, first we need to find the position of this item in the array:

	```
	let item = source.find(i => i.id === id);
	 let index = source.indexOf(item);
	```

2. Now, to get all the items before and after this item, we use the `slice()` method:

	```
	let beforeItems = source.slice(0, index); 
	let afterItems = source.slice(index + 1);
	```

3. Now, we take a copy of the given item and apply mutations using `tassign()`:

	`var updatedItem = tassign(item, { ... });`

4. Finally, we need to put all these items in a new array. One way to do this is:

	```
	var newArray =
	[].concat(beforeItems).concat(updatedItem).concat(afterItems);
	```

#### Refactoring

But this is too verbose. We can use the *spread operator* to enumerate items in an array: `var newArray = [...beforeItems, updatedItem, ...afterItems];`



















