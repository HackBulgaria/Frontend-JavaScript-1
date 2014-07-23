# Week 7 - RequireJS

We are going to use [RequireJS](http://requirejs.org/) in order to have a better control of importing and using JavaScript files.

A good introduction to what RequireJS is is this 9 minute video - https://www.youtube.com/watch?v=VGlDR1QiV3A

## RequireJS via Bower

We are going to use RequireJS installed via bower:

```
bower install requirejs
```

## Examples

Before starting with the big task for this week, check the examples to see RequireJS in action.

The first thing you will notice is that there is only 1 script tag in the HTML - tha one that loads RequireJS.

There is a special `data-main` attribute which points to a script, that is loaded first!

Usually, this script sets up the configuration and requires the rest of the dependencies.

## API Documentation

In order to understand how RequireJS works, the best thing you can do is to read the documentation - http://requirejs.org/docs/api.html - especially the part for __Defining a module__
