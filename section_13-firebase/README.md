# Firebase

## Overview

### Why Firebase?

- Fast, scalable and real-time database in the cloud
- Authentication
- Cloud messagging (for sending notifications)
- Storage (for storing file)
- Analytics
- **Multiple Platforms**. It provides libraries for:
	- iOS
	- Android
	- Javascript
	- C++ 

> It means that we can quickly deliver a cross platform solution to the users.

### A Real Time DB

It means anytime the data in the db is modified the changes are reflected automatically.

> When use Firebase?

- App the involves multiple users: if a user change data, the changes are immediatly visible to the other users.
- Chat Applications


## Set up Firebase in your Angular project

### Quickstart

1. [Firebase Console](https://console.firebase.google.com/?pli=1)
2. Click on *Create Project* follow instructions
3. Install AngularFire and Firebase: `npm install @angular/fire firebase --save`;
4.  Add Firebase config to `environments` variable:

	```
	export const environment = {
	    production: false,
	    firebase: {
	        apiKey: "xxxxxxxxx",
	        authDomain: "xxxxxxxxx",
	        databaseURL: "xxxxxxxxx",
	        projectId: "xxxxxxxxx",
	        storageBucket: "xxxxxxxxx",
	        messagingSenderId: "xxxxxxxxx",
	        appId: "xxxxxxxxx",
	        measurementId: "xxxxxxxxx"
	    }
	};
	
	```

5. Setup the Modules for Firebase

	```
	import { AngularFireModule } from '@angular/fire';
	import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
	import { AngularFirestoreModule } from '@angular/fire/firestore';
	import { environment } from '../environments/environment';
	
	  imports: [
	  
	    AngularFireModule.initializeApp(environment.firebase),
	    
	    AngularFirestoreModule,
	    AngularFireAnalyticsModule
	  ],
	```


## C.R.U.D.

### READ All

Let's try to fetch the data from Firebase:

- `ng g s data`;

	```
	import { AngularFirestore } from '@angular/fire/firestore';
	
	@Injectable()
	export class DataService {
	
	    constructor(private db: AngularFirestore) { }
	```

- Now what we would normally do is something like this:

	```
	getMovies() {
	    this.response = this.db.collection('movies').valueChanges();
	    this.response.subscribe((movies) => {
	        this.movies = movies;
	    });
	}
	```


> There are **2 issues** with this implementation:
 

1. _**Memory Leaks**_: every time we make a change, the server always return a whole `[{}, {}, ...]`.


	This is happening because we have `subscribe` to the `movies` list in our db.
	
	```
	getMovies() {
	    this.response = this.db.collection('movies').valueChanges();
	    this.response.subscribe((movies) => {
	        this.movies = movies;
	    });
	}
	```
	
	As we know if user navigate away from the current page, this subscription is still in memory, so **we must unsubscribe:** and we have 2 options:
	
	**a)** classic way `ngOnDestroy()`;
	
	**b)** `async` pipe;
	
	
	#### `ngOnDestroy`
	
	```
	export class AppComponent implements OnInit, OnDestroy {
	
	    response: Observable<any>;
	    movies: any[] = [];
	    subscription: Subscription;
	
	    constructor(public db: AngularFirestore) { }
	
	    getMovies() {
	        this.response = this.db.collection('movies').valueChanges();
	
	        this.subscription = this.response.subscribe((movies) => {
	            this.movies = movies;
	        });
	    }
	
	    ngOnInit() {
	        this.getMovies();
	    }
	
	    ngOnDestroy() {
	        this.subscription.unsubscribe();
	    }
	}
	```
	
	#### `async` Pipe
	
	When we apply `async` to an observable, this pipe is going to 
	
	- subscribe to that observable
	- gets the latest value: angular is going automatically refresh the component and get the latest data
	- unsubscribe
	
	```
	export class AppComponent implements OnInit {
	
	    movies$: Observable<any>;
	
	    constructor(public db: AngularFirestore) {}
	
	    getMovies() {
	        this.movies$ = this.db.collection('movies').valueChanges();
	    }
	
	    ngOnInit() {
	        this.getMovies();
	    }
	}
	```
	
	and in our view now we are iterating over an observable.
	
	```
	<ul>
	    <li *ngFor="let movie of movies$ | async">
	        {{ movie.title }}
	    </li>
	</ul>
	```
	
2. _**Missing id**_: When we create a collection firebase generate automatically an `id` for each document, although we cant't see those `ids` in our console so we need to add some logic to fix that:

	```
	getAll(collectioName: string) {
	        const response: AngularFirestoreCollection<IMovie> = this.db.collection(collectioName);
	
	        return response.snapshotChanges()
	            .pipe(
	                map((actions) => {
	                    return actions.map((rawData) => {
	                        const obj = rawData.payload.doc.data();
	                        obj.id = rawData.payload.doc.id;
	                        return obj;
	                    });
	                }))
	    }
	```
	
	> `ValueChanges()` doesn't include metadata, therefore we must use To obtain the `id` of the documents in a collection, we must use `snapshotChanges()`.
	
	.
	
	> By default `AngularFirestoreCollection<unknown>` so it's crucial to pass an interface in order to add the `id` property to our remapped obj.
	
	```
	export interface IMovie {
	    title: string;
	    liked: boolean;
	    id: string
	}
	```

- Back to our movie component:

```
movies$: Observable<any>
    
moviesIndex() {
    this.movies$ = this.service.getAll('movies');
}
```

### READ Item

- `DataService`

	```
	getItem(collectioName: string, id: string) {
	        return this.db.collection(collectioName).doc(id).valueChanges();
	    }
	```

- `movie.component.ts`

	```
	movieShow() {
	        const id = 'Fbr40wpZXlqtRzvv3qYq';
	        this.movie$ = this.service.getItem('movies', id);
	    }
	```

- `movie.component.html`

	Now instead of doing:
		
	```
	<h3>Title: {{ (movie$ | async ).title }} </h3>
	<p>liked: {{ (movie$ | async ).liked }} </p>
	<p>genre: {{ (movie$ | async ).genre.name }} </p>
	```
		
	we are gona use the `as` Keyword to give an alias:
		
	```
	<div *ngIf="movie$ | async as movie">
	    <h3>Title: {{ movie.title }} </h3>
	    <p>liked: {{ movie.liked }} </p>
	    <p>genre: {{ movie.genre.name }} </p>
	</div>
	```



## CREATE

- `DataService`

	```
	create(collectioName: string, newResource) {
        return this.db.collection(collectioName).add(newResource)
    }
	```

- `movie.component.ts`

	```
	movieNew() {
        this.service.create('movies', this.formModel);
    }
	```

## UPDATE

- `DataService`

	```
	update(collectioName: string, id: string, resource) {
        return this.db.collection(collectioName).doc(id).set(resource)
    }
	```

- `movie.component.ts`

	```
	movieUpdate() {
        this.service.update('movies', this.currentId, this.formModel);
    }
	```


## DELETE

- `DataService`

	```
	delete(collectioName: string, id: string) {
        return this.db.collection(collectioName).doc(id).delete();
    }
	```

- `movie.component.ts`

	```
	 movieDelete(movie) {
        this.service.delete('movies', movie.id);
    }
	```
