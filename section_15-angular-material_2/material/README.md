# What's Angular Material?

*A library of high-quality UI components built with Angular and Typescript*.

> Why Material?

- Internationalised
- Clean and simple API
- Well-tested
- Customizable
- Fast
- Well-documented


## Install Angular Material

1. Go to [Material getting-started](https://material.angular.io/guide/getting-started);
2. `ng add @angular/material`;
3. `npm i hammerjs --save` (library for gesture support);
4. The version 9 angular is as usual a huge pain in the back so remember to disable *ivy* in `/tsconfig.json`

	```
	  "angularCompilerOptions": {
	    "fullTemplateTypeCheck": true,
	    "strictInjectionParameters": true,
	    "enableIvy": false
	  }
	```

## Import Material Elements

`<mat-checkbox>Checkbox label</mat-checkbox>`

We got now an **error**, why?

> Each element needs its specific module! [checkbox/api](https://material.angular.io/components/checkbox/api)


```
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
    imports: [
     MatCheckboxModule
  ],
  export class AppModule { }
```

### Date Pickers

Starter code:

```
<mat-form-field>
    <input matInput>
    <mat-datepicker></mat-datepicker>
</mat-form-field>
```

- We need to connect `<mat-datepicker>` with the `<input>` field above:
	- First let's assing a template variable ` <mat-datepicker #bday>`
	- Then let's add the `[matDatepicker]` directive and bind it to the template variable ` <input matInput [matDatepicker]="bday">`
	- Finally let's add a button to toggle the calendar `<mat-datepicker-toggle matSuffix [for]="bday">`


We got an <p style="color:red">**error**: *MatDatepicker: No provider found for DateAdapter. You must import one of the following modules at your application root: MatNativeDateModule, MatMomentDateModule, or provide a custom implementation.*</p>

> Why ??

The datepicker obj has been built on the top of the `MatNativeDateModule` so in order to use the datepicker we need to import it in our module `import { MatNativeDateModule } from '@angular/material/core';`




























