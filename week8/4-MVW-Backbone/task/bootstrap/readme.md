# MVW intro

In this exercise we are going to create a simple Backbone.js application, which interacts with RESTful API.

## Interactions between the components

![Sequence](https://raw.githubusercontent.com/mgechev/backbone-intro/master/task/bootstrap/images/app.png "")

## Initial setup

```
cd app_root
bower install
```

After that start a static HTTP server with root the web application's root directory.

## Router (router.js)

1. In the `routes` object define that:
  1. When the user opens URL with hash equals to '/' should be invoked the `home` method.
  2. When the user opens URL with hash equals to `/user/:username` should be invoked the `user` method (note that :username is a placeholder, it can be equals to the value of any user name).
  3. When the user opens URL with hash equals to `/statistics` should be invoked the `stats` method.
2. In `stats` load all users before invoking `setView` and `render` of `FrontCtrl`. Note the asynchronous behaviour of the AJAX requests. Use `fetch` of the models.
3. On 17 and 33 line fill the invocation to the `FrontCtrl.render` method with the appropriate parameters.

## Views

### Home.js

1. Add appropriate event handlers. Once the `#add-btn` is clicked, invoke the `addUser` method. If `.delete-btn` is clicked, invoke the `removeUser` method.
2. Add appropriate event handlers in the `initialize` method. On change of the collection invoke the `render` method.
3. Implement `addUser` and `removeUser`. Note that you can take the index of the current user (the one which is associated with the `[X]` button onto, which the use have clicked) by using: `$(e.target).data('index')`.
4. Implement the `render` method by using the `template` set in `FrontCtrl` and passing it as argument, object literal with property `user` equals to the value of `this.model.toJSON()`.


### Stats.js

1. By using the example at [Chartjs.org](http://www.chartjs.org/docs/#bar-chart-example-usage), aggregate the data containing all users and their count of followers, in order to visualize them in a bar chart. All users are available in the model of the current view. The data aggregation should happen in `drawVisualization`. Create bar chart using the `Chart` constructor.
2. Inside `render` create the appropriate DOM elements in order to be able to draw the chart.


## Models

### User.js

1. Implement the `url` method by appending the user name of the current user to the end of the URL: `https://api.github.com/users/`. As query parameters add: `?client_id=8f3b8d572129632cf422&client_secret=f0669941c23378c30fb89f6c37be9075a5628bba`.

## Homework

1. Cache the model data, once loaded.
2. Fire `load.start` event when the template starts loading.
