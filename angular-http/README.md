# Angular Lab

### Introduction

I set up an Angular app that loops through an array of donuts and displays them on the page. When the form is submitted, a new donut is pushed into the array.

### Services

In the real world application most of the time we get the data from a server.
In order to do that we need to create a "Service". So we are gonna define a separate class which we call Service and inside we define the logic to get our list of donuts.

01. In the app folder we create a new file call `donuts.service.ts`

02.  Ok now we have a service but we need to use it in our `courses.component.ts`. How?
We need to:
`import { DonutsService } from './donuts.service'`;

03. now angular when is going to create an instance of our component, it looks at the constructor, it see that this constructor has a dependecies (service:DonutsService).
So first it create an instance of the DonutsService and pass it to the constructor

### We are not done yet!
 We need to instruct angular to create an instance of DonutsService. Pass it to our donuts component.

 Let's register the service in the `app.module.ts`

## Run `ng serve`
