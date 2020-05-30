# Deploy Angular Firebase App

## Firebase Hosting

For the code look at `02_firebase-auth` folder.

1. `ng build --prod --base-href /`;
2. `firebase init`;

This will open a promp:

![Imgur](https://www.dropbox.com/s/rgoao58p9mhdte7/06.png?raw=1)

3. Now we have a new file `firebase.json`, inside be sure to specify the path to the sub directory:

	```
	  "hosting": {
	    "public": "dist/firebase-demo",
	 ```
	 
	 In this way we are sure the app is pointing to the `index.html` inside the `dist` folder and not the one outside.
	 
4. `firebase deploy`;
5. Be sure to clean the cache in your browese;
6. Now we can go to our [courses](https://fir-course-8c65e.web.app/courses) app!