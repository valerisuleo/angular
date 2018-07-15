# Reactive Forms

Instead of letting angular creates the form control object four us we're going to create explicitly it in the court.

**Benefits:**

- More control over the form structure
- More control over the behavior

>If you want to build dynamic forms where inputs fields are render based on some data structure that you get from the server then your only option is to create a control obj in the code.


### In this section...

- Create control obj programatically
- Add validation
- Implement custom validation
- Implement async validation
- Build forms that includes an array of objects

## Creating Controls Programamatically

So here we have a simple bootstrap form

```
<form>
  <div class="form-group">
    <label for="username">Username</label>
    <input id="username" type="text" class="form-control">
  </div>

  <div class="form-group">
    <label for="password">Password</label>
    <input id="password" type="text" class="form-control">
  </div>
  
  <button class="btn btn-primary" type="submit">Sign Up</button>
</form>
```

What we wanna do is to convert this simple form into an agular form using the *reactive* approach which it means that we have **create the control obj explicitly in the code**

Back to the `/signup-form.component.ts` we want to:

`import { FormGroup, FormControl } from '@angular/forms';`

and in the `/app.module.ts`

`import { ReactiveFormsModule } from '@angular/forms';`

Next we need to define a field, let's call it `assoForm` and set it as new instance of the form obj. 

```
export class SignupFormComponent {

  assoForm = new FormGroup()
}
```

`FormGroup()` is expecting as argument an obj. Inside this obj we have *key*: string and as *value*: AbstractControl.

>What is AbstractControl?
 
In obj oriented programming languages we have a concept call *Inheritance*: so if we have multiple classes that share a common behavior instead of implementing it in multiple places, we define it once in a parent or a base class anf then we have those class inherit the same behavior.

>So in angular AbstractControl is the base class for FormControl and FormGroup.


```
export class SignupFormComponent {

  assoForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })
}
``` 

So this is **how we create FormGroup and FormControl objects in code.**


Now back to the template we need to associate this input field with the control object, to do that we use the `formControlName` directive

```
<form [formGroup]="assoForm">
  <div class="form-group">
    <label for="username">Username</label>
    <input formControlName="username" id="username" type="text" class="form-control">
  </div>
</form>
```

## Adding Validtation

So before we added valudation using *HTML5* attributes:

- `required`
- `minlenght`
- `pattern`

When we build Reactive Form **we do not use HTML5 attribute**, we assign validators when creating form control objects.

Back to  `/signup-form.component.ts` of we look at the cosntructor of the `FormControl`

```
 username: new FormControl()
```

has few arguments:

1. `formstate?: any` is optional so we can set as `''` becasue we don't need an initial value

2. `validator?: ValidatorFn || ValidatorFn[]` 
	>What's a ValidatorFn?
	
	In angular we have class called `Validators` 
	
3. `import { FormGroup, FormControl, Validators } from '@angular/forms';` 

4. Now we can the same mothods:
	
	- `Validators.required`
	- `Validators.minlength`
	- `Validators.minlength`
	- `Validators.pattern`
	- `Validators.email`

```
 username: new FormControl('', Validators.required)
```

> Note that we are not calling the method `Validators.required()`, we are simply passing a reference to this function.

So this is how we assing a validator to a form control obj.


Let's go back to `/signup-form.component.html` and add **validation error messages**

```
  <div class="form-group">
    <label for="username">Username</label>
    <input formControlName="username" id="username" type="text" class="form-control">
<!-- Validation error messages -->
    <div class="alert alert-danger">Username is required!</div>
  </div>
```

Now we wanna render the error msg only if the username is `invalid` or the input field has been `touched`:

Now `assoForm` as instance of the `FormGroup` class has a `get`  method...  

```
<div *ngIf="assoForm.get('')" class="alert alert-danger">Username is required!</div>
```

...and from here we can get access to any form control obj inside this group...

```
<div *ngIf="assoForm.get('username')" class="alert alert-danger">Username is required!</div>
```

...and from here we can access to the `touched` and `invalid` property:

```
<div *ngIf="assoForm.get('username').touched && assoForm.get('username').invalid" class="alert alert-danger">Username is required!</div>
```

### Refactoring
The code above is a little verbose so back to `/signup-form.component.ts` we can define a **property** that give us access to the form control obj...

```
get myUsername() {
	return this.assoForm.get('username');
}
```
...now we can access to this property in our template:

```
<div *ngIf="myUsername.touched && myUsername.invalid" class="alert alert-danger">Username is required!</div>
```

## Specific Validation Errors
So before we have just added our validator

```
 username: new FormControl('', Validators.required)
```

> How can we add multiple Validators?


```
 username: new FormControl('', [
 	Validators.required, 
 	Validators.minlength(3)
 ])
```

Now let's go back to the template to display **Specific Errors Msg**

```
<!-- Specific Validation Errors -->
    <div *ngIf="myUsername.touched && myUsername.invalid" class="alert alert-danger">
      <div *ngIf="myUsername.errors.required">Username is required!</div>
      <div *ngIf="myUsername.errors.minlength">Minlength is {{ myUsername.errors.minlength.requiredLength }}!</div>
    </div>
```

## Implemeting Custom Validator Fn

1. Go to [Angular.io](https://angular.io/) and look for `validatorfn` which is an *interface*

	```
	interface ValidationFn {
		(c: AbstracControl): ValidationErrors|null
	}
	```
	
2. Create inside the `/sing-up` folder a new file `username.validators.ts`
	
	```
	export class UsernameValidators {}
	```
	
3. Let's say that username cannot contain space
	
	```
	export class UsernameValidators {
		noSpace()
	}
	```
	
4. Now as we alredy know it takes as argument `AbstracControl`, this method should return either `ValidationErrors|null`

	
	```
	export class UsernameValidators {
		noSpace(control: AbstracControl): ValidationErrors|null
	}
	```
	
	
5. `import { AbstractControl, ValidationErrors } from '@angular/forms';`


6. Let's implement some logic
	
	```
		export class UsernameValidators {
			noSpace(control: AbstractControl): ValidationErrors|null {
			if((control.value as string).indexOf(' ') >= 0) {
				// returns some validation error
			}
		}
	}	
	```
	
	
7. Once again on [Angular.io](https://angular.io/api/forms/ValidationErrors)
	
	```
	type ValidationErrors = {
    [key: string]: any;
	};
	```
	
	So this `ValidationErrors ` represents an obj that has one or more *keys* as string and the *value* could be anything.

8. So here we should return on obj and its *key* is **the name of the validarion error**: `noSpace` and because the *value* can be anything I choosed `true`
	
	```
	export class UsernameValidators {
  noSpace(control: AbstractControl): ValidationErrors|null {
	    if((control.value as string).indexOf(' ') >= 0) {
	      return { noSpace: true }
	    } else {
	    	return null;
	    }
	  }
	}	
	```

	>In order to access this method from outside without creating an instance of 	this  `UsernameValidators` class, we decorate this method with `static`
	
	```
	export class UsernameValidators {
	static noSpace(control: AbstractControl): ValidationErrors|null {
	    if((control.value as string).indexOf(' ') >= 0) {
	      return { noSpace: true }
	    } else {
	    	return null;
	    }
	  }
	}	
	```
	
9. Back to the `/signup-form.component.ts`
	
	```
	assoForm = new FormGroup({
		username: new FormControl('', [
			Validators.required,
			Validators.minLength(3),
			UsernameValidators.noSpace
		]),
		password: new FormControl('', Validators.required)
	});
	```

10. Back to the template
	
	```
	<div *ngIf="myUsername.touched && myUsername.invalid" class="alert alert-danger">
		<div *ngIf="myUsername.errors.required">Username is required!</div>
		<div *ngIf="myUsername.errors.minlength">Minlength is {{ myUsername.errors.minlength.requiredLength }}!</div>
		<div *ngIf="myUsername.errors.noSpace">Cannot contain space!</div>
	</div>
	```


>We've put the `username.validators` inside `/signup-form` folder because this is the only place we are using this validator. In larger app chances are that several components might use the same validator. If that's the case we put all the validators in a shared folder as: `/app/common/validators`


## Asynchronous Validation











