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

To start with JavaScript, we are going to setup everything we need.

## Exercise 0

The first exercise will be to get everything up and running.

The setup will be described for Linux based operating systems (Using apt-get for packages)

### Sublime Text 3

If you are not a Vim user, we suggest you to install [Sublime Text 3](http://www.sublimetext.com/3)

It is highly configurable text editor.

For the difference between an IDE and a text editor, we suggest you to watch the following video: https://www.youtube.com/watch?v=qLDU8ugpO9Y (It's in Bulgarian)

### For Vim users

This is a good start to equip your Vim for JavaScript use - http://oli.me.uk/2013/06/29/equipping-vim-for-javascript/

### NodeJS

In the beginning, we are going to interpret our JavaScript programs using NodeJS.

To quote the [official website](http://nodejs.org/):

```
Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.

Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.
```

We are not going to build server applications - just run JavaScript programs to test input and output of functions.

#### Installing

* To install NodeJS on Ubuntu, follow this guide - https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager#ubuntu-mint-elementary-os
* For different OS you can check the Wiki page - https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager

In order to check if everything is ok, run:

```
$ node --version
v0.10.28
```

### JSHint

This will be our sanity check tool.
JSHint check the JavaScript file for bad practices or JavaScript pitfalls.

We will integrate it with Sublime, but first, we need to install it:

```
$ npm install jshint -g
```

_You may need super user to do this._

Check the docs here - http://www.jshint.com/docs/

#### What is `"use strict"` ?

This will help our interpretator to enforce more strict rules on the code we are writing.

JavaScript is one of those languages that needs strict rules in order to avoid the so-called "bad parts".

You can read more about it:

* http://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
* http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/

### Sublime Settings

We suggest some default settings for coding in JavaScript.

Open the file `run_this.js` in Sublime and after this, in the menu, find `Preferences` -> `Settings - More` -> `Syntax Specific - User`

This should open a file called `JavaScript.sublime-settings`. Here you can write your custom settings for the editor.

We recommend the following defaults as a base:

```json
{
    "draw_white_space": "all",
    "rulers": [80],
    "tab_size": 2,
    "translate_tabs_to_spaces": true,
    "trim_trailing_white_space_on_save": true,
    "ensure_newline_at_eof_on_save": true,
    // Set to true to automatically save files when switching to a different file
    // or application
    "save_on_focus_lost": true,
}
```

### Sublime Plugins

For base, we are going to use `SublimeCodeIntel` and `JSHint Gutter`

If you have fresh Sublime installed, first, you need to get the `Package Control` plugin - https://sublime.wbond.net/installation

After this, in Sublime, press `ctrl + shift + p` and type `Install Package`

In the following order, install:

* SublimeCodeIntel
* JSHint Guttter

#### JSHint Configuration

In Sublime, open `Preferences` -> `Package Settings` -> `JSHint Gutter` -> `Set Plugin Options`

You can change the following options:

```json
{
  // Automatically lint on edit (Sublime Text 3 only).
  "lint_on_edit": true,
  ...
  // Automatically lint when a file is saved.
  "lint_on_save": true,
  ...
}
```

Open `run_this.js` and press : `ctrl + shift + j`
You should see some `"Console is not defined"` errors.

Now open `Preferences` -> `Package Settings` -> `JSHint Gutter` -> `Set Linting Preferences` and add `console` to globals:

```json
{
    "globals": {
        "console" : true
  }
}
```

Now `run_this.js` should be linted withour any problems ( `ctrl + shift + j` )

### Running a simple script with Node

In the `week0` folder, there is a file called `run_this.js`

Open a terminal window and try to execute it:

```
$ node run_this.js
```

You should get some output from it :)

### Running a simple script in the browser

Now, open the file called `run_this.html` in a browser (We recommend Chrome).

Open the browser console and navigate to the console output.

You should see the same result as from the NodeJS.

## When you are ready

If you have the required setup, you can move to:

* `tic-tac-toe`  folder, where there is a game to finish. It is a console-based tic-tac-toe. `README.md` there will give you more instructions.
* `problems` folder, where there are simple coding problems to be solved using JavaScript (With NodeJS). Again, `README.md` there for more instructions.
