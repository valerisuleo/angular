# Routing



### Steps

01. configure the route

02. add a router outlet

03. add links

## Configuring Routes
We need to import the router module in the app.module.ts:
`import {  RouterModule } from '@angular/router';`


Now we are ready to define our routes.

```
RouterModule.forRoot([
	{ path: 'followers', component: FollowersComponent},
	{ path: 'donuts', component: DonutsComponent},
	{ path: 'home', component: LandingComponent},
	{ path: '**', redirectTo: 'home' }
])
```

**ORDER MATTERS: Always remember to put the more specific path above general.**

## Router Outlet
In the `app.component.ts`

```
<navbar>
</navbar>

<router-outlet>
</router-outlet>
```
when angular sees this, it's going to render the component associated with thr current rout after this router outlet.

Now back to the browser to test if it's working let's change the url from `http://localhost:4200/home` to `http://localhost:4200/followers`

## Router Links
In angular applications we dont'use this atrribute: `<li><a href="/followers">Followers</a></li>`
We use instead: `<li><a routerLink="/followers">Followers</a></li>`

When we are dealing with a **dynamic** link we need to use property binding:

```
<div class="info">
   <div>
      <a [routerLink]="['/followers', follower.id]">{{ follower.login }}</a>
      <a routerLink="{{ follower.html_url }}">{{ follower.html_url }}</a>
  </div>
</div> 
```

# Getting The Routes Params


### Steps

01. In the show component we need to: `import { ActivatedRoute } from '@angular/router';`

02. In order to get access to route parameters we need to inject the activated route class in our constructor: `constructor(private route: ActivatedRoute) { }`

03. `paramMap` That's the property that give us all the parameters in this route. Now you at the type of this property: it's an **observable** of paramsMap, and we already know that observables have a method called `subscribe`

 ```   
    ngOnInit() {
    this.route.paramMap
  }
  ```


