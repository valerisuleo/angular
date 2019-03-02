# HandlingErrors

We have 2 types of Errors:

## Unexpected Error
- **Server is offline**: *so the client sent a req to th eserver but the server is not open running to respond*
- **Network is Down**: *the server is online but the client cannot reach it*
- **Unhandled exceptions**: *the server is open running, the network is fine but because of some bug we fail to call the server*

## Expected Error
- "Not Found" errors `404`
- "Bad Request" `400`

## Handling Unexpected Errors
So in our `index.component`

```
  getAll() {
    const vm = this;

    vm.postService.getAll()
    .subscribe((response) => {
      vm.all = response;
      console.log(vm.all);
    });
  }
```

In order to simulate an error we change wrong our `url`. Now let's handle this error:

```
  getAll() {
    const vm = this;

    vm.postService.getAll()
    .subscribe((response) => {
      vm.all = response;
      console.log(vm.all);
    }, error  => {
      alert('An unxpected error occured!');
    });
  }
```

> You might want to use *toast notification* instead of `alert` since they are less confronting and don't freeze the application.


## Handling Expected Errors

### Scenario where an item has already been deleted `404`

We want to tell the users that this item is not available anymore.

```
 postDelete(post) {
   const vm = this;

   vm.postService.delete(post)
   .subscribe(() => {
     let index = vm.all.indexOf(post);
     vm.all.splice(index, 1);
   }, 
   (error: Response) => {
     if (error.status === 404) {
       alert('this post has already been deleted')
     } else {
       alert('An unxpected error occured!');
     }
   });
 }
```

To simulate this scenario we pass a wrong `id`

```
 postDelete(post) {
   const vm = this;

   vm.postService.delete(345)
   .subscribe(() => {
```
### Bad request scenario `400`


```
  postCreate(postform) {
  const vm = this;

    vm.postNew = postform.value;
    console.log('vm.postNew', vm.postNew);
    vm.postService.create(vm.postNew)
    .subscribe((response) => {
      vm.postNew['id'] = response.id;
      vm.all.push(vm.postNew);
      console.log('vm.all', vm.all)
    }, (error: Response)  => {
      if (error.status === 400) {
        // potentially we can hava an error object coming from the server and we can display it.
        postform.setErrors(error.json());
      } else {
        alert('An unxpected error occured!');
      }
    });
  }
```

## Throwing Specific Application Errors

We want to move this piece of logic out from our component.

```
(error: Response) => {
     if (error.status === 404) {
```

So back to our `data.service` here in the `postDelete` method if there's an exception I wanna that error and instead of sending the `Response` object to our component I wanna send an obj that is part of our application domain.

> How can we `catch` this error?

 `import { map, catchError } from "rxjs/operators"`

At this point we get a compilation error. Here we need to `return` an observable that has an error, so our component will get that error and do somethig with it.

```
  delete(resource) {
    return this.http.delete(this.url + '/' + resource.id)
    .pipe(catchError((error: Response) => {
      Observable.throw()
    }))
  }
```

` Observable.throw()` and this method return a new observable that has an error.

> What's the type of that error?

The type should be something specific to our application **not the response object.**

So we need to create a new class to represent *application specific error*.

1. `mkdir common`
2. `touch common/app-error.ts`

	```
	export class AppError {
	  constructor() { }
	}
	```

3. We pass it as argument

	```
	  delete(resource) {
	    return this.http.delete(this.url + '/' + resource.id)
	    .pipe(catchError((error: Response) => {
	      Observable.throw(new AppError())
	    }))
	  }
	```
	It's a good practice to include the **original error** bacause somewhere we are gonna get that error anf log it on the server.
4. Back to `app-error.ts`

	```
	export class AppError {
  		constructor(public originalError?: any) { }
	}
	```
This will be a field in our class that we can access when logging this error

5. Now back to `data.service` we can pass the original error obj as args in `new AppError(error)` and finally add `return` and the **compilation error is gone!**

	```
	delete(resource) {
	    return this.http.delete(this.url + '/' + resource.id)
	    .pipe(catchError((error: Response) => {
	      return Observable.throw(new AppError(error));
	    }))
	  }
	```
> **Quick Recap:** What we are doing here is catching the error obj which is an instance of the `Response ` class and then we're returning a different kind of error which is specific to our application. 

Now we need to change this implementation and check for the `status ` of the error.
So if it's `404` we want to return a different kind of error; because in our component we need to know if that post exists or not and we don't want to check the status of the response object.


1. `touch common/not-found-error.ts`

	```
	import { AppError } from './app-error';
	
	export class NotFoundError extends AppError {}
	```

2. `/data.service.ts`

	```
	  delete(id) {
	    return this.http.delete(this.url + `/${id}`)
	    .pipe(catchError((error: Response) => {
	      if (error.status === 404) {
	          return Observable.throw(new NotFoundError())
	      }
	      return Observable.throw(new AppError(error));
	    }))
	  }
	```
	> UPDATE: Since RxJS 6 you should import "creation" methods directly from 'rxjs': `import { throwError } from 'rxjs';`
	
	So the **ACTUAL** code is:
	
	```
	delete(resource) {
	    return this.http.delete(this.url + `/${resource.id}`)
	    .pipe(
	      catchError((error: Response) => {
	        if (error.status === 404) {
	            return throwError(new NotFoundError())
	        } else {
	          return throwError(new AppError(error))
	        }
	      })
	    )
  		}
  ```
  
  
3. Back to our component:


	
	> now in the future instead of this alert we could display a toast notification and instead of console log we could log the error message on the server.
So the actual implementation of this method is not going to be only two lines of code. It's going to be a little bit more complex.

4. So now we have a global error handler. Next we need to register this as a dependency or as a *provider* in the `/app.module.`  
In the provider's array we need to register this new class but we're going to use a different approach
>We want to tell Angular that wherever internally you're using error handler instead use `AppErrorHandler `.

	```
	   providers: [
	    PostsService,
	    { provide: ErrorHandler, useClass: AppErrorHandler}
	  ],
	```
5. Back to our component, first we want to check to see if this is a not found error. Otherwise we want to rethrow the error so it will be captured by our global error handler.

	```
	 postDelete(property) {
	  const vm = this;
	
	  vm.propertyService.delete(property)
	  .subscribe(() => {
	    let index = vm.all.indexOf(property);
	    vm.all.splice(index, 1);
	  },
	  (error: AppError) => {
	    if (error instanceof NotFoundError) {
	      alert('this property has already been deleted')
	    } else {
	      throw error;  
	    }
	  });
	}
	```
	
6. Finally let's simulate and unhandled exception I can post service. I'm going to change the `url` to an invalid url.

## A Reusable Error Handling Method

Now in our `/data-service` I see another room for refactoring.
We have a very similar code for *create* and *delete*.

Only difference is this magic number: instead of `400` we are working with `404`
Chances thay we're going to have similar code repeated in the `update ` method as well.

>So how can we improve this implementation?

So I'm going to add a private method

```
private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));
  
    if (error.status === 404)
      return Observable.throw(new NotFoundError());
    
    return Observable.throw(new AppError(error));
  }
```

 then we change:
 
 ```
   delete(id) {
    return this.http.delete(this.url + `/${resource.id}`)
      .map(response => response.json())
      .catch(this.handleError);
  }
```
