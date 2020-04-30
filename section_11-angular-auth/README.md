# AngularAuth

In this section...

- angular2-jwt
- Show/hide elements
- Protect Routes
	- Redirect user after login
	- Refresh Navbar after Login
	- protecting routes based on user's role
- Append Headers
	
	
	
## angular2-jwt

In order to implements out `Auth` system we need to:

- `npm uninstall angular2-jwt --save`

> **NOTE!!!** since Angular v6 the path to `rxjs` library has been changed, unfortunally *angular2-jwt* has been updated so we need to remap its paths by installing ` npm install --save rxjs-compat`

In `app.module`

```
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import 'rxjs-compat';

export function getAuthHttp(http) {
    return new AuthHttp(new AuthConfig({
        tokenName: 'token'
    }), http);
}
```

*angular2-jwt* is a powerful tool and provides several cool features:

- isTokenExpired
- **append header**
- getTokenExpirationDate
- decodeToken


## Show/hide elements

Now what I would usually do is


```
isLoggedIn() { 
    const token = localStorage.getItem('token') ? true : false;
    return token;
}
```

which is totally fine with *angular2-jwt* we can do:

```
isLoggedIn() {
	return tokenNotExpired();
}
```

Let's see what *angular2-jwt* is doing behind the curtains:

```
isLoggedIn() {
    const token = localStorage.getItem('token');
    let jwtHelper = new JwtHelper();

    if (!token) 
    return false;

    let isTokenExpired = jwtHelper.isTokenExpired(token);

    return !isTokenExpired;
}
```

### Show/hide elements based on Role

```
getCurrentUser() {
    let jwtHelper = new JwtHelper();
    const token = localStorage.getItem('token');
    const decodeToken = !token ? null : jwtHelper.decodeToken(token);
    return decodeToken;
}
```



## Protect Routes


In Angular we use `AuthGuard` to protect routes from anonimum users;


- `ng g s auth-guard`

	```
	import { Injectable } from '@angular/core';
	
	@Injectable()
	export class AuthGuard {
	
	constructor() { }
	}
	```
		
- We need to implement an `interface` called *CanActivate*. 

	```
	import { Injectable } from '@angular/core';
	import { CanActivate } from '@angular/router';
	
	@Injectable()
	export class AuthGuard implements CanActivate {
	
	  constructor() { }
	
	  canActivate() {
	      
	  }
	}
	```
	
	In this method `canActivate()` we are gonna check if user is logged in or not.
	
	```
	canActivate() {
        const isLoggedIn = this.service.isLoggedIn();

        if (isLoggedIn) {
            return true;
        } else {
            this.router.navigate(['/login'])
            return false;
        }
    }
    ```
    
- Back to `AppRoutingModule`:

	```
	const routes: Routes = [
	    { path: 'register', component: RegisterComponent },
	    { path: 'login', component: LoginComponent },
	    
	    {
	        path: 'movies',
	        component: HomeComponent,
	        canActivate: [AuthGuard]
	    },
	    
	    { path: '**', redirectTo: 'movies' }
	];
	```


### Redirect user after login

When pointing the browser to a protected area like `localhost:8080/queryparams` I get redirected to my login page just like expected.

But after a successful login, I would like to be redirected back to calling URL (`/queryparams` in this case).

> How can we do that ?


- Back to `AuthGuard` service:

	```
	canActivate() {
	        const isLoggedIn = this.service.isLoggedIn();
	
	        if (isLoggedIn) {
	            return true;
	        } else {
	            this.router.navigate(['/login'], {queryParams: { returnUrl: }})
	            return false;
	        }
	    }
	``` 
	
	we are gonna pass a second arg `{queryParams: }` which will be set to an obj `{queryParams: { returnUrl: ??? }}`
	
	> What we should use here?
	> As we know the `canActivate()` method takes 2 params: `canActivate(route, state: RouterStateSnapshot)`. Now with these `state` param we can get access to the url that user wanna to access.

	```
	    canActivate(route, state: RouterStateSnapshot) {
        const isLoggedIn = this.service.isLoggedIn();

        if (isLoggedIn) {
            return true;
        } else {
            this.router.navigate(['/login'], {queryParams: { returnUrl: state.url }})
            return false;
    ```

- Back to `login` component

	```
    handleSubmit(isSubmitted: boolean) {
        const { value } = this.formGroup;
	
        if (isSubmitted) {
            this.service.login(value)
            .subscribe((response) => {
                const { statusCode } = response;
                if (statusCode === 200) {
                    const returnUrl =  this.route.snapshot.queryParamMap.get('returnUrl');
                    this.router.navigate([ returnUrl || '/movies']);
                }
            });
        }
    }
	```


### Refresh Navbar after Login

So we have a `navbar` component that displays *movies* and *admin* `link` depending on whether they are logged in or not.

**Current behaviour**: When the User logs in, the `navbar` does not refresh or change unless a full page refresh is done in the browser. 

> How can we fix it?

We are gonna use an `observable` and subsribe to it to check whether a user is logged or not

```
@Injectable()
export class AuthService {

    public navbarRefresh$ = new Subject();
    public isRefreshed: boolean = false;
 .
 .
 .
 
 login(credentials): Observable<any> {
        return this.http.post(`${environment.servicesHost}/login`, credentials)
            .pipe(map((response) => {
                const data = response.json();
                if (data && data.token) {
                    localStorage.setItem('token', data.token);
                    
                    this.navbarRefresh$.next(this.isRefreshed = true);
                }
                return data;
            }));
    }
.
.
.

 logout(): void {
    localStorage.removeItem('token');
    
    this.navbarRefresh$.next(this.isRefreshed = true);
    
    this.router.navigate(['/login']);
}

```

Back to `navbar`:

```
refreshNavbarAfterLogin() {
    this.service.navbarRefresh$
    .subscribe((data) => {
        if (data) {
            this.renderNav();
        }
    });
}
```

### protecting routes based on user's role

- `ng g s admin-auth-guard`

	```
	import { Injectable } from '@angular/core';
	import { CanActivate, Router } from '@angular/router';
	import { AuthService } from './auth.service';
	
	@Injectable()
	export class AdminAuthGuardService implements CanActivate {
	
	    constructor(
	        private router: Router,
	        private service: AuthService,
	    ) { }
	
	    canActivate() {
			
	    }
	}
	```
	
- Now we need to decode the token to verufy is an *admin* user:

	```
	canActivate() {
		const decodeToken = this.service.getCurrentUser();
		const { admin } = decodeToken;
			
		if (admin) {
		return admin;
		} else {
		this.router.navigate(['/no-access']);
		}
	}
	```

## Append Headers


As we know we need to pass the token each time to the back-end each time we want to access to a protected `API`.

In order to do that, either we can do something like: 

```
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable()
export class DataService {

    constructor(private url: string, private http: Http) { }

    getAll() {
        const token = localStorage.getItem('token');
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);
        let options = new RequestOptions({ headers: headers});

        return this.http.get(this.url, options)
            .pipe(map(response => response.json()));
    }
}
```	

But we'll have to repeat this code for each request, and it's very verbose!

> How can we fix it ?

We can let *angular2-jwt* do the grunt work for us:

- `import { AuthHttp } from 'angular2-jwt'`;
- `constructor(private url: string, private http: AuthHttp) { }`

> Now this class `AuthHttp` has the exact same interface as `Http` in angular!

```
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { map } from "rxjs/operators";
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class DataService {

    constructor(private url: string, private http: AuthHttp) { }

    getAll() {
        return this.http.get(this.url)
            .pipe(map(response => response.json()));
    }
}
```

Finally back to `MovieService`:

```
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';
import { AuthHttp } from 'angular2-jwt';
import { environment } from '../../environments/environment';

@Injectable()
export class MoviesService extends DataService {

    constructor(authHttp: AuthHttp) {
        super(`${environment.servicesHost}/movies`, authHttp);
    }
}
```

> What if I wanna call a **not** protected api?

No problem. We can still use the classic `Http` class by passing a second param:

```
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { map } from "rxjs/operators";
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class DataService {

    constructor(
        private url: string,
        private http: Http,
        private authHttp: AuthHttp
        ) { }

    getAll() {
        return this.authHttp.get(this.url)
            .pipe(map(response => response.json()));
    }
}
```


Back to `DataService`:

```
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';
import { AuthHttp } from 'angular2-jwt';
import { environment } from '../../environments/environment';

@Injectable()
export class MoviesService extends DataService {

    constructor(authHttp: AuthHttp, http: Http) {
        super(`${environment.servicesHost}/movies`, http, authHttp);
    }
}
```






























