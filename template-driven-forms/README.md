# Template Driven Forms

### In this section...

- Implement forms with different kinds of input fields
- Display validation errors
- Disable the submit button



## Building a Bootstrap Form

1. `ng g c contact-form`

2. `/contact-form.component.html`

```
<form>
  <div class="form-group">
  <label for="firstname">firstname</label>
  <input type="text" id="firstname" class="form-control">
</div>

  <div class="form-group">
  <label for="comments">comments</label>
  <textarea rows="10" cols="30" name="comments" id="comments" class="form-control"></textarea>
</div>

<button class="btn btn-primary">submit</button>
</form>
```

## ngModel
So we have built this basic bootrap form (**we must always close the textarea TAG!**) and now we wanna add validation to this, using the *template driven approach*: we apply a directive to our  input field and angular will create a control obj and associate it with that input field under the hood. 
>Now guess what?

The directive we are gonna apply is `ngModel`.

```
<div class="form-group">
  <label for="firstname">firstname</label>
  <input ngModel name="firstname" type="text" id="firstname" class="form-control">
</div>
```

>`ngModel name="firstname"`

>These 2 attributes is all you need to set in order to use the template driven attribute.

However in order to understand what's going on we add 

`(change)="log()"`

Now we need to pass a reference  `#firstname="ngModel"` to the log method so we can log it on the console:

`(change)="log(firstname)"`


Let's go implement this method `/contact-form.component.ts`

```
export class ContactFormComponent {
log(asso) {
  console.log(asso);
  	}
}
```

>Now we need to import the `FormsModule` from angular in the `/app.module.ts`

`import { FormsModule, ReactiveFormsModule } from '@angular/forms';`

When we apply the ngModel directive `#firstname="ngModel"` along the name attribute on the input field angular automatically creates an instance of the form control class and associates it with the input field.

### Validation
1. we add `required` in the input field

2. we create a new div and we use a bootstrap class `class="alert alert-danger"`

3. we don't wanna display it for the whole time, we wanna show it only if the field is not valid: `*ngIf="passname.valid"`

```
<div class="alert alert-danger" 
*ngIf="passname.touched && !passname.valid">
firstname is required
</div>
```

### Specific Validation Errors

1. we want a separate div for each validation errors:

	- `minlength`
	
	- `pattern`
	
	- `required`
	 

2. if we type `ok` and take a look at the console `/ngModel/control/errors` we'll notice an error obj with some properties inside. we can use those properties to make dynamic errors messages

```
<div class="form-group">
	<label for="firstname">firstname</label>
	<input type="text" required minlength="3" maxlength="10" pattern="bananas"
	ngModel name="firstname" #passname="ngModel" (change)="log(passname)"
	id="firstname" class="form-control">
	
	<div class="alert alert-danger" *ngIf="passname.touched && !passname.valid">
		<div *ngIf="passname.errors.required">firstname is required</div>
		<div *ngIf="passname.errors.minlength">firstname min {{ passname.errors.minlength.requiredLength }} characters</div>
		<div *ngIf="passname.errors.pattern">firstname does not match pattern</div>
	</div>
</div>
```

> Add some style to your validation!

```
.form-control.ng-invalid.ng-dirty.ng-touched{
  border: 2px solid red;
}
```

## ngForm
>We have learned that when we apply and ngModel directive to an input field angular creates a form control object under the hood and associates it with the input field

1. We need to hookup our form with the cotroller 
`<form #f="ngForm" (ngSubmit)="submit(f)">`

2. Now back to `/ng-form.component.ts`

	```
	  submit(f) {
    	console.log(f);
    	// f.value
  		}
  ```
 
3. Once it has been submitted we can get in the console the value of our form.

### Disabling the Submit Btn

```
<button class="btn btn-primary" [disabled]="!f.valid">submit</button>
```

### Working with Check Boxes

In order to render a checkbox using bootstrap we need:

1. `div` with a class="checkbox"
2. `input type="checkbox"`
3.  set the name attribute `name="isSubscribe"`

```
  <div class="checkbox">
    <label>Subscribe</label>
    <input type="checkbox" ngModel name="isSubscribe" value="">
  </div>

  <p>{{ f.value | json }}</p>
```

>`{{ f.value | json }}`
>This is a very good diagnostic tool to see value in the form.

### Working with Drop-down Lists

```
<div class="form-group">

    <label for="contactMethod">contactMethod</label>

    <select class="form-control" multiple ngModel name="contactMethod">

    <!-- <select class="form-control" ngModel name="contactMethod"> -->

      <option value=""></option>

      <!-- <option *ngFor="let option of options" [value]="option.id"> -->
        <option *ngFor="let option of options" [ngValue]="option">
        {{ option.optionName }}
      </option>
    </select>
  </div>
```

### Working with Radio Buttons

```
  <div class="radio" *ngFor="let radio of options">
    <label>
        <input ngModel type="radio" name="contactMethod" [value]="radio.id">
        {{ radio.optionName }}
    </label>
  </div>
```


## ngModelGroup
Sometimes the api might expect a nested structure like this one:

```
{
"id": 1,
"name": "Leanne Graham",
"username": "Bret",
"email": "Sincere@april.biz",
"address": {
  "street": "Kulas Light",
  "suite": "Apt. 556",
  "city": "Gwenborough",
  "zipcode": "92998-3874",
  "geo": {
    "lat": "-37.3159",
    "lng": "81.1496"
  }
```

In this scenario we use `ngModelGroup` directive.

Back to the template we add a div and set the value to contact.

```
<div ngModelGroup="contact"></div>
```

Now let's move almost inside what we did so far:

```
<div class="form-group">

	<label for="firstname">firstname</label>
	<input type="text" required minlength="3" maxlength="10" pattern="bananas"
	ngModel name="firstname" #passname="ngModel" (change)="log(passname)"
	id="firstname" class="form-control">
	
	<div class="alert alert-danger" *ngIf="passname.touched && !passname.valid">
		<div *ngIf="passname.errors.required">firstname is required</div>
		<div *ngIf="passname.errors.minlength">firstname min {{ passname.errors.minlength.requiredLength }} characters</div>
		<div *ngIf="passname.errors.pattern">firstname does not match pattern</div>
	</div>

</div>
```

Now `firstname` is a sub-property of `contact`

Also similar to the ngModel we can get a reference to this directive using a template variables

```
<div ngModelGroup="contact" #contact="ngModelGroup"></div>
```



