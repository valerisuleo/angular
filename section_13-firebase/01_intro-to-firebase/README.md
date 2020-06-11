# Firebase

## Overview

### Why Firebase?

- Fast, scalable and real-time database in the cloud
- Authentication
- Cloud messagging (for sending notifications)
- Storage (for storing file)
- Analytics
- The **size** of the data-set does not influence the response time
- Never split the db into muliple db due to the increase volume of the data-set
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
	
	> `ValueChanges()` doesn't include metadata, therefore to obtain the `id` of the documents in a collection, we must use `snapshotChanges()`.
	
	.
	
	> We have also available `stateChanges`: instead of returning the whole array of objects, this time we'll get an array with only the objects that have been modified (to test it change the title property from the *firebase console*) + the *payload* with the `id`.
	
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

#### `first() and take(5)`

It's very super cool having a real time db, but for regular app it might be weird for the user seeing the data changing in real time in front their eyes without any reason whatsoever.

To interrupt this 2 way binding relationship with our db we can simply use the the `first()` operator:

```
return response.snapshotChanges()
    .pipe(
        map((snaps) => {
            return snaps.map((rawData) => {
                const obj = rawData.payload.doc.data();
                obj.id = rawData.payload.doc.id;
                return obj;
            });
        }), first())
}
```

or we can use `take(5)` to detect up to 5 changes

```
return response.snapshotChanges()
    .pipe(
        map((snaps) => {
            return snaps.map((rawData) => {
                const obj = rawData.payload.doc.data();
                obj.id = rawData.payload.doc.id;
                return obj;
            });
        }), take(5))
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



### CREATE

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

### UPDATE

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


### DELETE

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
	
	
	
## Firestore Queries


- `orederBy()`

	```
	getAll(collectioName: string) {
	    const response: AngularFirestoreCollection<ID> = 
	    
	 this.db.collection(
	       collectioName,
	       ref => ref.orderBy('seqNo')
	);
	```

- findOne
	
	```
	 this.db.collection(
	   collectioName,
	    ref => ref.where('seqNo', '==', 2)
	);
	```

- range of results

	```
	 this.db.collection(
	       collectioName,
	        ref => ref.orderBy('seqNo').startAt(0).endAt(5)
	);
	```

-  presence of a value in array:
	
	1. specifiy what's the field we want to query: `ref.where('categories')`;
	2. we are gonna do a search inside an array so we are gonna use: `('categories', 'array-contains')`;
	3. The third arg will be the `value` we are looking for: `('categories', 'array-contains', 'ADVANCED')`


	```	    
	this.db.collection(
	        collectioName,
	        ref => ref.where('categories', 'array-contains', 'ADVANCED')
	    );
	```

### Queries with multiple fields


*Cloud Firestore creates the indexes defined by your automatic index settings for each field you add, enabling most simple queries by default. You can add exemptions to manually set how a specific field is indexed.*

> What will happen when we do a query with multiple fields?


```
this.db.collection(
            collectioName,
            ref => ref.where('seqNo', '==', 2).where("lessonsCount", ">", 5)
        );
```

![Imgur](https://www.dropbox.com/s/sfep2z0dwc7240i/01.png?raw=1)


Instead of trying to create `index` for all possible fields combinations, which the result, *firestore* will throw this error and we'll have to create our *compound index* manually. Well... to be fair *firebase* will do the grunt work for us, so simply click on the error link:

![Imgur](https://www.dropbox.com/s/mvnlcvzlm3gazig/02.png?raw=1)

this may take some time...

![Imgur](https://www.dropbox.com/s/7wdok2w5u8l2bky/03.png?raw=1)


It works! :)

### Query limitations

Before we did:


```
this.db.collection(
            collectioName,
            ref => ref.where('seqNo', '==', 2).where("lessonsCount", ">", 5)
        );
```

and it worked fine; but what if did something like:

```
this.db.collection(
    collectioName,
    ref => ref.where('seqNo', '>=', 2).where("lessonsCount", ">=", 5)
);
```

We get an **ERROR**: <p style='color:red'>Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on 'seqNo' and 'lessonsCount'</p>

> Why this is happening?

Firestore prevents us from writing slow queries and it does that by throwing errorsl in other words the query above is just not possible to be execute in firestore.

> We **cannot** have multiple inequality range *where* conditions on different fields!

We need to keep in mind that every firestore query that we made is going to be supported by one particular `index`, either a single fied or compound index. 





##	Understanding Firestore Batched Writes

So far we have manipulated the data mostly using the *UI* but what if we wanto to do that behind the scene?
What is we want to update multiple documents on our db?

Firestore provide some tool to perform atomic transaction: *Batched Writes*

1. We need to creare a `ref` with the target docs in our db:

	```
	const courseRef1 = this.db.doc('/courses/1qJ8ASAAJF4gkiOoL7fn').ref;
	const courseRef2 = this.db.doc('/courses/L0LejQthkgBzIMLL859Q').ref;
	```

2. We need a `batch()` instance in order to modify both `ref` at the same time:

	```
	batch.update(courseRef1, {titles: {description: 'Bleach'}});
	batch.update(courseRef2, {titles: {description: 'Naruto'}});
	```
	
3. We are now ready to commit our batch. 

	> Now `batch.commit()` will return a `Promise`, but we can convert it into an `Observable` by using the `of` operator.
	
	```
	const batch$ = of(batch.commit());
		
	    batch$.subscribe((data) => {
	        console.log(data);
	    })
	```
	
> **Note.** There's a limit for how many operations we can do in a batch write: about 500 data modification operations in the same batch. So we to do more than 500 we need to split them in different bathes.


## Working with `references`


So far we have linked documents togeher by using nested collections, (in *moongoose* we call them embedded model).

![Imgur](https://www.dropbox.com/s/a2pn9j899w6sd0o/04.png?raw=1)

> But what if we want to link a spefic lesson also to a different course?

Well to do that we need a `reference`:

![Imgur](https://www.dropbox.com/s/sw54v5s27nu5l68/05.png?raw=1)


```
    showCourse(): void {
        this.course$ = this.service.getItem('courses', this.id);
        this.course$.subscribe((data) => {
            const { path } = data.refLesson;

            this.service.getRefItem(path)
                .subscribe((el) => {
                    console.log(el);
                });
        });
    }
```


#### Embedding vs Referencing

 - Embedding:
	- Small subdocuments
	- Data that does not change regularly
	- Eventual consistency is acceptable
	- Document that grow by a small amout
	- Data that you will often need to perform a second query to fetch
	- Fast reads

- Referencing:
	- Large subdocuments
	- Volatile data
	- Immediate consistency is necessary
	- Document that grow a large amount
	- Data that you will often exclude from results
	- Fast writes

































































	
	
	
	
	
	
	

