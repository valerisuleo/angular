# Angular Elements


## What are they?

It's a feat. that allow us to turn our regular ***Angular** Components* into  ***Web** Components*.

Now *WC* are basically custom HTML elements part of the DOM and the JS API and they are not related to Angular and can be used in other apps. 

> They are also particulary useful when invoked in angular app: allow us to dynamically insert HTML code holding Angular Components **after** the angular app has been compiled and loaded.


## Getting Started

- `ng new angular-elements`;
- `npm i @angular/elements --save`;
- `npm i @webcomponents/custom-elements --save`
- go to `polyfill.ts`:


	```
	import '@webcomponents/custom-elements/src/native-shim';
	import '@webcomponents/custom-elements/src/custom-elements'
	
	```

## Buiding Elements

1. Now that we are all set: `ng g c bootstrap-alert` and let's throw in some html:

```
<div class="alert alert-primary" role="alert">
    {{ message }}
</div>

```

2. In the `app.component.ts` let's create our element in 2 steps:

```
    constructor(injector: Injector) {
        // Convert `BootstrapAlertComponent` to a custom element.
        const AlertElement = createCustomElement(BootstrapAlertComponent, {
            injector,
        });
        // Register the custom element with the browser.
        customElements.define("alert-element", AlertElement);
    }
```
 	
> `Injector`: as we know angular use dependency injection and the injector is basically the tool that does the injection and the element under the hood can connect itself to our app.

> `customElements.define()` as we said it's a feature provide by JS and not by angular; here we define the tagname for our element `<alert-element><alert-element/>`

3. To verify it's working we can call our angular element inside the `index.html`

```
    <body>
        <app-root></app-root>
        <div class="container">
            <alert-element message="'My first AngularElements'"></alert-element>
        </div>
    </body>
```


































