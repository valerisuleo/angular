## WHAT?

Build out the Question Wizard for Dynamic Merch.
This stepper, based on the user selections will generate a payload that will be used during the phase to to filter the product cards displayed under the page.

## WHY?

The stepper will help us to provide the user with the products that best match the user preferences.

## HOW?

1. `OnInit` we pull down all the steps created by the content team.

2. Each option might be marked with a key prop;

   ```
   {
       page: 5,
       columns: '3',
       pageTitle: 'Where do you watch tv?',
       categories: [],
       options: [
         {
           type: 'radio',
           label: 'watch tv',
           name: 'watchTv',
           isChecked: false,
           isRequired: false,
           icon: 'sass-brands',
           value: 'oneRoom',
           key: 'streamAndTv',
         },
         {
           type: 'radio',
           label: 'do not watch tv',
           name: 'noTv',
           isChecked: false,
           isRequired: false,
           icon: 'circle-xmark-solid',
           value: 'true',
           key: '',
         },
       ],
     },
   ```

3. Now let's say user has selected the first option:

   ```
         {
           type: 'radio',
           label: 'watch tv',
           name: 'watchTv',
           isChecked: false,
           isRequired: false,
           icon: 'sass-brands',
           value: 'oneRoom',
           key: 'streamAndTv',
         },
   ```

4. Every time user moves to the next page, if the obj selected has a key we are gonna store this key into an array called `keywords` that we can use to fetch the next step.

   > How do we know which one is the next step?

5. Each step has also a _categories_ prop

   ```
    {
       page: 6,
       columns: '4',
       pageTitle: 'Question',
       categories: ['streamAndTv'],
       options: [
         {
           type: 'checkbox',
           label: 'entertainment',
           name: 'entertainment',
           isChecked: false,
           isRequired: false,
           icon: 'sass-brands',
           value: '',
           key: '',
         },
         {
           type: 'checkbox',
           label: 'drama',
           name: 'drama',
           isChecked: false,
           isRequired: false,
           icon: 'sass-brands',
           value: '',
           key: '',
         },
         {
           type: 'checkbox',
           label: 'documentaries',
           name: 'documentaries',
           isChecked: false,
           isRequired: false,
           icon: 'sass-brands',
           value: '',
           key: '',
         },
         {
           type: 'checkbox',
           label: 'sports',
           name: 'sports',
           isChecked: false,
           isRequired: false,
           icon: 'sass-brands',
           value: '',
           key: 'sports',
         },

       ],
     },
   ```

   > See where are we going with this?

   ```
    private keywordsSatisfyCategories(item: any): boolean {
     return item.categories.every((key) => this.keywords.includes(key));
   }
   ```

````



6. The only thing left to do now is to update both steps and page index and to do that we can use some magic provided by *reduce*


	```
		this.steps = this.clone.reduce((acc, item) => {
		return this.buildStepsAndSetPageIndex(item, acc);
		}, []);
	```





````
