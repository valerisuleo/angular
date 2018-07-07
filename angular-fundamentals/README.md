# AngularFundamentals

In this section we're going to look at the fundamentals of building an angular Application.

By the end of this section we will see:

- Components
- Modules
- Templates
- Directives
- Services


## Components

 At the heart of an angular app we have one or more components

*What's a component?*

A component incapsulate data, the html and the logic.

### Createaing Components

1. **Create** a component
	(if you had already installed *angular cli* you can type in the terminal: `ng g c theNameOfYourComponent`)
2. **Register** it in a module
	(the *cli* will take care of this step for you)
3. Add an element in an **HTML markup**
	(Add some markup in the html file of your component and simply call it in the `app.component.html` with its selector's name: `<course></course>`)
	
Now let's rung in the terminal `ng serve` to check if this is working



## Modules
A module is a container for a group of related components.


Every ng app has an app.module but we wanna split it into diferent modules as the application growths (*courses.module.ts, messages.module.ts, instructors.module.ts*)

## Templates
 We can render the data in our template in a dynamic way using *interpolation* `{{ courses }}`
 
We can also define a method to get the title:

```
  courses = ['WDI-25!'];

  getCourses() {
    return this.courses;
  }
```

and of then call it in the component.html:

```
<p>The title of this page is welcome <em>{{ getCourses() }}</em></p>
```

## Directives
Now we wanna display a whole list of courses.
In order to do that we need an agular *directive* called `*ngFor`.

```
<ul>
  <li *ngFor="let course of allCourses">{{ course }}</li>
</ul>
```

N.B. We use directives to **manipulate the dom**

## Services
In a real word application we get the data from a service.

1. We can use the *cli* to generate a service like we do with the component `ng g s course` however keep in mind that in this case **it will not update** `app.module.ts`

2. Now we need to import our service into `course.component.ts`
3. We *inject* it into the `constructor`
4. Now when we call it angular will create an *instance* of our service for us.



