# Firebase Storage

## Quick start

1. `firebase init`;
2. Follow the instrutions
3. Now we shoud have a file called `storage.rules` which points to the storage:

	```
	service firebase.storage {
	  match /b/{bucket}/o {
	    match /{allPaths=**} {
	      allow read, write: if request.auth!=null;
	    }
	  }
	}
	```

	> This set of rules is good just for development mode.

4. `firebase deploy`;


## Upload and Download

### Upload

5. Now it's time to add an **UPLOAD** `btn`

	```
	<div>
	    <span>Course</span>
	    <input type="file" (change)="upload($event)">
	</div>
	```

6. and of course we have to write some logic:

	`import {AngularFireStorageModule} from '@angular/fire/storage';`
	
	```
	upload(e) {
	    const img: File = e.target.files[0];
	    const path = `courses/${this.id}/${img.name}`
	    console.log(img);
	
	    const task = this.storage.upload(path, img);
	    task.snapshotChanges()
	        .subscribe((data) => {
	            console.log(data);
	            
	        })
	}
	```

7. If we go to the firebase console and we click on the *storage* link we should see our `img` successfuly uploaded.

### Download

- Before allowing the download we want to be sure the upload is completed. Let's add the `last` operator from `rxjs`

> The `last()` operator is going to wait for the `snapshotChanges()` observable to complete before procceeding further.

```
upload(e) {
    const img: File = e.target.files[0];
    const path = `courses/${this.id}/${img.name}`
    console.log(img);

    const task = this.storage.upload(path, img);
    task.snapshotChanges()
        .pipe(
            last(),
        )
        .subscribe((data) => {
            console.log(data);
        })
}
```

- Now that we have the *last* value emitted we want to be able to subsribe to it. To do that we are gonna use `concatMap` operator.


```
upload(e) {
    const img: File = e.target.files[0];
    const path = `courses/${this.id}/${img.name}`
    console.log(img);

    const task = this.storage.upload(path, img);
    task.snapshotChanges()
        .pipe(
            last(),
            concatMap(() => this.storage.ref(path).getDownloadURL())
        )
        .subscribe((data) => {
            console.log(data);
       })
}
```

> In response to the last value emitted from `snapshotChanges()` let's replace it with the `getDownloadURL()` observable.

In other words here

```
.subscribe((data) => {
            console.log(data);
       })
```

We are `console.log` now the *download url*! :)


#### Preview

We can use the download url to show a preview of the img we have just uploaded:

```
<div class="preview" *ngIf="downloadUrl">
    <img [src]="downloadUrl" alt="">
</div>
```

## Storage Security Rules


### Size Limit

- All users are allowed to read the data;
- Only authenticated user are allowed to upload img;
- max img size is 2MB;

```
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read;
      allow write: if request.auth!=null && request.resource.size < 2 * 1024 * 1024;
    }
  }
```

run `firebase deploy` to publish changes.

































