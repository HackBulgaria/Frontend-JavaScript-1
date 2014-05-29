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

```javascript
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

We have something called __variable hoisting__. All `var` statements are moved to the top of the enclosing function, but the value is assigned later, in the original place of the `var` statement

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

### Iterating arrays

In JavaScript, we have a standard for-loop:

```javascript
var
    arr = [1,2,3],
    i = 0,
    n = arr.length;

for(i; i < n; i++) {
    // do something with arr[i]
}
```

But also, we have something far more powerful - a [`forEach` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) of the array object:

```javascript
var arr = [1,2,3];

arr.forEach(function(value, index, arr) {
    // do something with value
    console.log(value);
});
```

`forEach` takes a function (__we call this callback__) and calls the given function for every item in the array.

The function is called with 3 arguments:

* `value` - which is the current item in the array
* `index` - which is the index of the current value in the array
* `array` - the array itself.

`forEach` is a method. Since everything in JavaScript is a function, we have methods for most of our types.

### Iterating objects

Objects in JavaScript can serve as dictionaries (hash tables) where the key can be string.
__In JavaScript, objects cannot have keys with different types than a string.__

A fully functioning hash table is coming in the next version of JavaScript.

To iterate an object, we can use a `for .. in` loop:

```javascript
var courses = {
    "FrontendJavaScript" : "https://github.com/HackBulgaria/Frontend-JavaScript-1/",
    "Core Java" : "https://github.com/HackBulgaria/Core-Java-1"
};

for(course in courses) {
  console.log("A link for " + course + " can be found here - " + courses[course]);
};
```

Later, we will find out that `for .. in` loop goes one step further and returns object properties that we do not want.

Another way to iterate is to use the `Object.keys()` method, which returns all keys from a given object.

For example:

```javascript
var courses = {
    "FrontendJavaScript" : "https://github.com/HackBulgaria/Frontend-JavaScript-1/",
    "Core Java" : "https://github.com/HackBulgaria/Core-Java-1"
};

console.log(Object.keys(courses)); // [ 'FrontendJavaScript', 'Core Java' ]
```

Knowing that arrays have `forEach` method, we can do the following:

```javascript
var courses = {
    "FrontendJavaScript" : "https://github.com/HackBulgaria/Frontend-JavaScript-1/",
    "Core Java" : "https://github.com/HackBulgaria/Core-Java-1"
};

// we can skip the index and array arguments
Object.keys(courses).forEach(function(value) {
    console.log("A link for " + value + " can be found here - " + courses[value])
});
```

## Sortring Arrays

It is a good idea to read the documentation about sort - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


The default sort sorts the items lexicographically.


Check this out:

```javascript
var scores = [1, 2, 10, 21];
scores.sort(); // [1, 10, 2, 21]
```

If you want to sort numbers, you have to give a comparator function:

```javascript
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers);
```
