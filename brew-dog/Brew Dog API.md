![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Brew Dog API

For this assignment you'll be consuming an external API.

Brew Dog is a craft beer brewery based in Scotland, and, luckily for us it has a free public API!

![Punk API](https://cloud.githubusercontent.com/assets/3531085/24105868/270db47a-0d7e-11e7-8679-231242e88066.png)

Using the starter code provided and the [Punk API Documentation](https://punkapi.com/documentation/v2) create a single page app (SPA) which displays data from the API.

## Requirements

- Pull in 12 items from the API and present them on the page
- Add a load more button that pulls in the next 12 items from the API
- Add a search box that will filter the items (you can do this in the view or the controller)
- Add UI-Bootstrap

## Deliverables

- A responsive Angular app styled with Bootstrap.
- A single controller which loads the data from the API and filters the results.

![screen shot 2017-03-20 at 15 31 17](https://cloud.githubusercontent.com/assets/3531085/24107314/4eaf2140-0d82-11e7-94e9-1bb153234865.png)

## Bonus

- Add a bootstrap modal.
- Add tests to your filter functionality.

## Tips

- Test out the Punk API with insomnia before you start with your Angular App
- **Do not use `$resource`** for this assignment. You will not need to create a model, since you are making requests to a _read only_ API. Instead use `$http`.
- If you decide write tests, remember you are testing the filter functionality, **not** the Punk API, so fake some data in the test suite.