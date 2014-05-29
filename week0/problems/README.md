# Problems to solve with JavaScript

We are going to code in pure JavaScript in order to solve some coding problems.
We are also going to implement unit tests for that, using `nodeunit` - https://github.com/caolan/nodeunit


## Installing nodeunit

Nodeunit is a unit-testing framework for NodeJS.

To install it, simply run:

```
$ sudo npm install -g nodeunit
```

In the folder, there are two files - `factorial.js` and `factorial-test.js`.

Open and examine their structure. In order to run the unit test, type:

```
$ nodeunit factorial-test.js
```

You will see the following output:

```
factorial-test.js
✔ testFactorialForZero
✔ testFactorialForFive

OK: 2 assertions (8ms)
```

Now, lets start with the problems and some JavaScript syntax:

## Basic Syntax

### Variables

As you know, variables are defined with the `var` keyword.

```javascript
var a = 5;
var b = 6;

console.log(a + b);
```

Variables have types but the types are hidden from us since JavaScript is a dynamic language.

We can have functions, numbers, strings, lists, objects and so on.

```
// numbers
var n = 5;

// strings
var str = "JavaScript is Awesome!";

// arrays / lists
var list = [1,2,3];

// functions
var f = function(x) {
    return x * x;
};

// objects - they serve as dictionaries
var courses = {
    "FrontendJavaScript" : "https://github.com/HackBulgaria/Frontend-JavaScript-1/",
    "Core Java" : "https://github.com/HackBulgaria/Core-Java-1"
};
```

### Function Scope for variables

In languages like C / C++, Java, C#, etc. - we have block scope visibility for variables.

That means, if we create a new variable inside a for-loop, it won't be visible outside it:

```c
for(int i = 0; i < 10; i++) {
    // something with i
}

// i is not visible here
printf("%d", i);
```

__In JavaScript, a variable is visible to the enclosing function!__

For example:

```javascript
var arr = [1,2,3];
for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// i is visible
// this will print 3
console.log(i);
```

We have something called __variable hoisting__. All `var` statements are moved to the top of the enclosing function, but the value is assign later, in the original place of the `var` statement

The code above is translated to:

```javascript
var arr = [1,2,3];
var i; // undefined

for(i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// i is visible
// this will print 3
console.log(i);
```

### Iterating arrays and objects

In JavaScript, we have a standard for-loop:
