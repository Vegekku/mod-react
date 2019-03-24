# mod-react

VI Bootcamp Web KeepCoding practice for React module

## Useful commands

* `npm start` starts the development server.
* `npm run build` bundles the app into static files for production.
* `npm test` starts the test runner.
* `npm run eject` removes this tool keeping copies of build dependencies, configuration files and scripts into the app directory. **Doing this you can't go back!**

## Using app

### Home

Divided in three sections:

1. Searcher, where you can search for any movies or series.
2. Discover, where app suggest to you interest content.
3. Collections created by the user.

### Managing collections

You can create a new collection when a movie is added from search or discover list, pushing green plus button. Insert a name for the collection in the textbox and save. This action create a collection and add it the movie or serie.

Once a collection has been created, this can be selected from dropdown. Or you can create a new collection follow the last steps.

Removing movies or series from a collection it's easy. Simply push red minus button.

If you want to remove entire collection, push red cross near the collection name.

### Managing movies

You only scored movies or series added to your collections. A score belong to a movie or serie, so same movie or serie in twice or more collections have the same score.

For score a movie, push yellow button inside movie or serie.

To see details about any movie or serie, simply push blue button to show more info about it.


## TODO

* Improve design effects, controlling the list movement.
* Improve detail adding more info, videos and pictures.
* Add a login to manage users.
* Refactor API calls in one file.