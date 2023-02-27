# ControlValueAccessor 

## What?

It's an interface in Angular that allows you to create custom form controls that can be used with Angular's `ngModel`, `formControl`, and `formControlName` directives.

When you create a custom form control that implements the `ControlValueAccessor` interface, you are telling Angular how to read and write the value of your control to and from the DOM. This is important because it enables the user to interact with your custom control and Angular to keep the control's value in sync with the form.

Here are the methods that are defined in the `ControlValueAccessor` interface:

1. `writeValue(obj: any): void` - This method is called by Angular when it needs to update the value of your control. It takes a value as an argument, which represents the current value of your control.
2. `registerOnChange(fn: any): void` - This method is called by Angular to register a function that should be called whenever the value of your control changes. This function is typically the callback function provided by Angular's `ngModel`, `formControl`, or `formControlName` directives.
3. `registerOnTouched(fn: any): void` - This method is called by Angular to register a function that should be called whenever the user interacts with your control, such as *clicking* or *typing* in it. This function is typically used to mark the control as "touched" so that Angular can display validation errors if necessary.
4. `setDisabledState(isDisabled: boolean): void` - This method is called by Angular to enable or disable your control based on the disabled state of the form.


## How?

Let's say you want to create a custom `checkbox` control that can be used with Angular's `ngModel` directive. Here's how you can do it:

1. First, create a new TypeScript file called custom-checkbox.component.ts and define your custom control component like this: