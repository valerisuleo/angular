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

01. In the **show** component we need to: `import { ActivatedRoute } from '@angular/router';`

02. In order to get access to route parameters we need to inject the activated route class in our constructor: `constructor(private route: ActivatedRoute) { }`

03. `paramMap` That's the property that give us all the parameters in this route. Now you at the type of this property: it's an **observable** of paramsMap, and we already know that observables have a method called `subscribe`

 ```   
    export class FollowerShowComponent implements OnInit  {

  constructor(
    private route: ActivatedRoute,
    private service: FollowersService
  ) { }

  follower = {};

  getFollower() {
    const vm = this;
    const id = vm.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    const vm = this;

    vm.getFollower();
    console.log(vm);
  }
}  
```

04. Finally we have the `id ` now we need to pass it into our `data.service` 

  ```
  get(id) {
    return this.http.get(this.url + '/' + id);
  } 
  ```
  
05. Now we can call our brand new function from the service inside `getFollowers()` 

  ```
  getFollower() {
    const vm = this;
    const id = vm.route.snapshot.paramMap.get('id');

    vm.service.get(id)
    .subscribe((response) => {
      vm.follower = response.json();
    });
  } 
  ```

## Query Parameters
Sometimes we wanna add optional parameters to our routes.
`http://localhost:4200/followers?page=1&order=newst`

Let's see how:

01. we bind queryParams to an oject:

```
<nav>
  <ul>
    <li><a routerLinkActive="active current" routerLink="/followers" [queryParams]="{{ page: 1, order: 'newest' }}">Followers</a></li>
  </ul>
</nav>
```

02. Back to the `followers.component.ts` we can get the optional params which very similar the way we get the require params

```
  allFollowers: any[];

  ngOnInit() {
    const vm = this;
    
    vm.route.paramMap
    	.subscribe((params) => {
    
    );
    
    vm.route.queryParamMap
     	.subscribe((params) => {
    
    );

    vm.service.getAll()
    .subscribe((response) => {
      vm.allFollowers = response.json();
    });
  }
```

## Subscribing To Multiple Observable

How can we :

01. get both the require and the optional query params
02. subscribe to them  
03. and then call the server to get the list of flollowers?

As we learned an **observable is a stream of asynchronous Data there arrives overtime**

Now instead of having two different subscriptions to these observables, we want to **combine** them into a new observable and then subscribe to it.

So back to our followers component we need to import: 
 
 `import { Observable } from 'rxjs/Observable';`
 `import 'rxjs/add/observable/combineLatest'`

```
ngOnInit() {
    const vm = this;

    // here we pass an array of observables
    Observable.combineLatest([
      vm.route.paramMap,
      vm.route.queryParamMap
    ])
    .subscribe((combined) => {
      console.log(combined)
      const page = combined[1].get('page');

      vm.service.getAll()
      .subscribe((response) => {
        vm.allFollowers = response.json();
        console.log('allFollowers', vm.allFollowers);
      });
    })
  }
```


	 







