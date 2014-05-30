# Materials for week 0

Those are the materials to prepare yourself for the class exercises that we are going to make.

## The World's Most Misunderstood Programming Language

We are going to start with the very basics!
This is an hour long video that does a great overview of the language - both it's good and bad parts - https://www.youtube.com/watch?v=hQVTIJBZook

## Functional Programming and JavaScript

JavaScript has a very good support for functional programming.

### First class functions

Functions are first class - they can be values of variables:

```javascript
var f = function(x) {
    return x + 1;
};

console.log(typeof x); // "function"
```

__This means that functions can be passed as arguments to other functions and returned as results from functions.__

### Higher-order functions

Having first-class functions, we can make higher-order functions.

A higher-order funciton is a function that:

* Takes another function/s as an argument
* Returns a function as a result

In JavaScript, we have `forEach`, `map`, `filter`, `reduce` and many other high-order functions, which gives us more expressive power and more abstraction over dealing with collections.

We implemented our version of the `map`, `filter` and `reduce` functions, that are available as list methods in JavaScript:

```javascript
var map = function(f, arr) {
    var result = [];

    arr.forEach(function(value) {
        result.push(f(value));
    });

    return result;
};
```

```javascript
var filter = function(pred, arr) {
    var result = [];

    arr.forEach(function(value) {
        if(pred(value)) {
            result.push(value);
        }
    });

    return result;
};
```

```javascript
// returns the array without the first element
var tail = function(arr) {
  return arr.slice(1);
};

// foldl
var reduce = function(oper, arr, start) {

  // we check if start is given
  // if not - we take the first element as a start
  if(typeof start === "undefined") {
    start = arr[0];
    arr = tail(arr);
  }

  var accumulate = start;
  arr.forEach(function(value) {
    accumulate = oper(accumulate, value);
  });

  return accumulate;
};
```

### Lambda functions

Also called anonymous functions - are functions without names.
We use anonymous functions when we have a function, that needs to be executed in place or used only once somewhere. They are very handy, because we don't have to bind them to a global scope or think for proper names.

In JavaScript, if we want to create anonymous function, we can do the following:

```javascript
// this is a valid statement
(function(x) {
    return x * x;
});
```

Anonymous functions have very important applications:

* They can be passed as values to higher-order functions (See the examples of map / filter / reduce). This removes the need to create a varible to hold every function we want to use.
* They can be executed at place (at the moment of their creation), which is used for scope creation. In JavaScript, we have function scope.
* They can be returned as an output of another function - again, used very often in scope creation or module patterns.


If we want to execute an anonymous function at place, we can to the following:

```javascript
> (function(x) { return x * x;} (2) )
4
```

Notice how we call the function with `(2)`

### Further reading

You can read this chapter - http://eloquentjavascript.net/chapter6.html from the Eloquent JavaScript book.
