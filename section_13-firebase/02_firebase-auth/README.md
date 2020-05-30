# Firebase Auth

In this section...

- Social Login
- Email and Password Auth
- hide element based on auth state

## Firebase UI

### Quick start

1. Go to [Firebase UI](https://github.com/firebase/firebaseui-web)
2. `npm install firebaseui --save`
3. `import {AngularFireAuthModule} from '@angular/fire/auth';`
4. `@import '~firebaseui/dist/firebaseui.css';` in `style.scss`
5. `login.html` we need to make a container `div` and pass it to *fbUI*

```
<div id="firebaseui-auth-container" class="auth-container">

</div>
``` 

### Configuration of the library

```
const uiConfig = {
    
}
```

- The first thing we are going to config is the different type of auth supported:

```
const uiConfig = {

    signInOpts: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
}
```

- Next we are gonna add a second property `callbacks` which will hold a `fn` to get called whenever there's a successful sign in:

```
const uiConfig = {

    signInOpts: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    
   callbacks: {
                signInSuccessWithAuthResult: this.onLoginSuccess.bind(this)
            }
}


    onLoginSuccess() {

    }
    
``` 

### Initialise the library

1. Define a new variable  `ui: firebaseui.auth.AuthUI;`
2. Initialise the variable: `this.ui = new firebaseui.auth.AuthUI()`

> This method will take an arg, which is a reference to gloabal firebase sdk auth service:

```
constructor(private angularFire: AngularFireAuth) { }

this.ui = new firebaseui.auth.AuthUI(this.angularFire.auth)

```

3. We are now ready to initialise our *fbUI* library

```
this.fbUI.start('#firebaseui-auth-container', uiConfig);
```

4. We should finally see the btns on the screen!

## Auth with Firebase UI

1. Fill up the form to sign in;
2. go to the firebase console;
3. we should see a new user created;
4. Now we would like to access to user data

	```
	onLoginSuccess(message) {
	    console.log(message);
	    this.router.navigate(['/courses']);
	}
	```
	
	Now we can access to a lot of information about our user but when we navigate to `/courses` we can't see any data. Why?
	
	If we look at the `console` we can see a warning <p style='color:orange'>core.js:41133 Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?</p>
	
	> What's going on?
	
	Angular is not aware that `onLoginSuccess` has been called (*outside Angular zone*), so we need to inform it manually in order to upadate the views
	
	> How can we fix it?
	
	```
	constructor(private zone: NgZone) { }
	        
	onLoginSuccess(message) {
	
	    this.zone.run(() => {
	        this.router.navigate(['/courses']);
	    })
	}
	
	```
	
	it works!

5. We need to destroy `fbUI: firebaseui.auth.AuthUI;` whenever the login component get destroyed otherwise we get an `err`

	```
	ngOnDestroy() : void {
	    this.fbUI.delete();
	}
	``` 



## Auth Service

1. `import {AngularFireAuthModule} from '@angular/fire/auth';`
2. `ng g s auth`
	
	```
	import { Injectable } from '@angular/core';
	import { AngularFireAuth } from '@angular/fire/auth';
	import { map } from 'rxjs/operators';
	import { Observable } from 'rxjs';
	
	@Injectable()
	export class AuthService {
	
	    constructor(private angularFire: AngularFireAuth) { }
	
	    getAuthState() {
	        return this.angularFire.authState
	        .pipe(
	            map(data => data.toJSON())
	        )
	    }
	
	    signOut() {
	        return this.angularFire.auth.signOut();
	    }
	
	    isLoggedIn(): Observable<boolean> {
	        return this.angularFire.authState
	            .pipe(map(user => !!user))
	    }
	}
	
	```


3. `getAuthState()` will return all data related to the current user.









































