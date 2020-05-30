# Firebase Security Rules

Currently our rules allows anyone on the internet to view, edit, and delete all data in our Firestore database. It is useful for getting started but it leaves your app open to attackers.

- go to the firebase console
- click on the *rules* tab

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    match /{document=**} {
      allow read, write: if request.time < timestamp.date(2020, 6, 14);
    }
  }
}
```

Let's say we want to: 

- allow anyone to read **all** the data
- prevent anyone from write **all** the data

```
match /{document=**} {
  allow read: if true
  allow write: if false
}
```

Now if we try do modify our courses we get an error! :)


## Security Rules Syntax

- Prevent from reading a **specific collection**

	```
	service cloud.firestore {
	  match /databases/{database}/documents/courses/{id} {
		
	   allow read;
	      allow write: if false;
	  }
	}
	
	```

- Targeting a **single document**: `allow read, write`

	```
	  match /databases/{database}/documents/courses/RkmCz1RYJ7QDGFceT3N6 {
		
	   allow read: if true;
	      allow write: if true;
	  }
	  
	  match /databases/{database}/documents/courses/{id} {
		
	   allow read: if true;
	      allow write: if false;
	  }
	  
	```

	> **Note** The order of the rules doesn't matter.



	###### Refactoring
	
	```
	service cloud.firestore {
	  
	  match /databases/{database}/documents/courses/{id} {
		
	   allow read: if true;
	   allow write: if id == 'RkmCz1RYJ7QDGFceT3N6'
	  }
	}
	```



	###### C.R.U.D on Databse 
	
	`read` and `write` can be replaced with:
	
	```
	  match /databases/{database}/documents/courses/{id} {
		
	   allow create; // 
	   allow read; // get, list
	   allow update: if id == 'RkmCz1RYJ7QDGFceT3N6'
	   allow delete: if false;
	  }
	  
	```
	
	
- Targeting **different collections**:

	```
	match /databases/{database}/documents {
	  
		match /userd/{id} {
		 allow write;
		 allow read;
		}
			
		 match /courses/{id} {
		 allow create;
		 allow read;
		 allow update: if id == 'RkmCz1RYJ7QDGFceT3N6'
		 allow delete: if false;
		}
	    
	}
	  
	```


## Secure Routes

```
  match /databases/{database}/documents {
  
  	match /courses/{id} {
			allow read: if request.auth.uid != null;
    }
    
  }
```

Brilliant now our courses are safe! We can't access to our nested collection *lessons*

```
  match /databases/{database}/documents {
  
  	match /courses/{id} {
			allow read: if request.auth.uid != null;
    }
    
      match /courses/{id}/lessons/{lessonsId} {
			allow read: if request.auth.uid != null;
    }
    
  }
  
```

This one will work but we could actually do better:

```
  match /databases/{database}/documents {
  
  	function isAuth() {
  	return request.auth.uid != null;
  }
  
      match /courses/{id} {
        allow read: if isAuth();

      match /lessons/{lessonsId} {
        allow read: if isAuth();
      }
  	}  
  }
```


## Roles and Whitelist

### Whitelist

Right now our app's data is readable only by authenticated users, however we want to take our app to the next level:

- User
	- has to be authenticated 
	- belongs to a whitelist

1. First we need to to create a `users` collection, we can fetch the data by accessing to the *Authentication* section;

2. We want to deny any access from the client side

	```
	match /users/{id} {
	    allow read, write: if false;
	  }
	      
	```

3. let's write a `fn` to check wether or not a user is Auth and belongs to the `users` collection

	```
	function isKnowUser() {
		return isAuth() && 
		exists(/databases/$(database)/documents/users/$(request.auth.uid));
	}
	
	```

4. Let's test it!

```
match /users/{id} {
	allow read, write: if false;
}
  
match /courses/{id} {
	allow read: if isAuth();

	match /lessons/{lessonsId} {
	allow read: if isKnowUser();
	}
}
```

> Code Explenation: currently all the authenticated users can read the `courses` collection but only the one who is authenticated and belongs to the `users` collection can read the `lessons` nested collection.


### Roles

Now we want to write a `fn` to allow only users with `isAdmin: true` to make some operations.


```
function isAdmin() {
	return isAuth() && 
		get(/databases/$(database)/documents/users/$(request.auth.uid))
	  .data.isAdmin == true;
}


  match /courses/{id} {
        allow read: if isAuth();
        allow write: if isAdmin();
}
  
```

Now only admin users can edit a course.



## Schema aka Validations Rules

Firestore is a noSql db, hence is schemaless. As for mongo we have `moongoose` to add a Schema 

```
const movieSchema = new mongoose.Schema(
    {
        title: String,
        genre: genreSchema,
        numberInStock: Number,
        dailyRentalRate: Number,
        liked: Boolean
    },
```

we can do the same in firestore by writing some rules:

```
    function isNotEmptyString(fieldName) {
  	return request.resource.data[fieldName] is string
    && request.resource.data[fieldName].size()>0;
  }
  
    function isValidCourse() {
  	return request.resource.data.seqNo is number
    	&& request.resource.data.lessonsCount is number
      && request.resource.data.lessonsCount is > 0
      && isNotEmptyString('url');
  }

```


## Write Custom Rules

Let's say that an operation is bind to a value:

For example as long as the status of a document is `open` we can still work on that document but if is `closed` we can't modify it anymore.


To do that we just need to update our rules:

```
match /courses/{id} {
	allow read: if isAuth();
	allow write: if isAdmin() 
	&& isValidCourse() 
	
	&& resource.data.status == 'open'
```

##  Installing Firestore Command Line Deployment

So far we have working on the firestore console but it would be much better having those rules on our *ide*, right?

> How can we do that?

Frome the terminal:

1. `npm i -g firebase-tools`;
2. run `firebase login`;
3. select `Firestore: Deploy rules and create indexes for Firestore`;

	This will create a bunch of new files in our projects:
	
	- `firebase.json`
	- `firestore.rules` 
	- `firestore.indexes.json`
	
	Everything we have written so far (rules, index, custom index) is now available in our *ide* and it's a 2 way binding. If we update our rules, those changes will be pushed to the store:

4. run `firebase deploy`;





























































