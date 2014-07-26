# Toggling paragrahps

You have a simple page with 3 paragraphs with 3 different classes - `first`, `second` and `third`

There is a style block where the `highlight` class is defined.

## What you have to do?

When the user clicks the __Toggle Button__, you have to do the following:

* First, be sure to connect `jQuery` and `app.js` with your `index.html` :)
* When the button is clicked - you should add the `highlight` class to the next paragraph. The cycle starts from the one with class `first`.

The button should toggle the `highlight` class from `first` through `second` through `third`.

At any given time, only one paragraph should have the `highlight` class.

## For help

You can check the following jQuery methods:

* `$(selector).addClass()` - http://api.jquery.com/addclass/
* `$(selector).removeClass()` - http://api.jquery.com/removeclass/
