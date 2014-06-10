# Problems to be solved using OOP JavaScript

## A Pair or two

Create a class `Pair`, which takes two arguments of variable type - `left` and `right`

The class should have the following __prototype__ methods:

* `Pair.prototype.equals = function(pair) {...}` - the method takes another `Pair` and returns true if both `left` and `right` of both pairs are strictly equal
* `Pair.prototype.toString` - returns the pair in the following string format - `({left}, {right})` where `{left}` and `{right}` are replaced by the given values.
* `Pair.prototype.toList` - returns a list of `[left, right]`
* `Pair.prototype.combine = function(f) {...}` - `f` is a function of two arguments (`left` and `right`) - combine returns the generated value of the passed function `f`

Few examples:

```javascript
var p = new Pair(4, 6);

p.combine(function(left, right) {
    return left + right;
}); // 10
```

## String, Array, Number prototype functions

### String Prototype

Extend `String.prototype` with the following methods:

* `String.prototype.capitalize` - returns the String in capital letters

For example:

```javascript
"javascript".capitalize(); // "JAVASCRIPT"
```

* `String.prototype.dasharize` - returns a new string, where every `"_"` is replaced by a dash - `"-"`

For example:

```javascript
'border_bottom_width'.dasherize(); // -> 'border-bottom-width'
```

* `String.prototype.times = function(amount)` - returns the string, repeated `amount` times with one space between each repetition

For example:

```javascript
"bobi".times(5); // "bobi bobi bobi bobi bobi"
``` 

* `String.prototype.blank` - checks if the string is blank - either it is empty string ot it is containing only whitespace

For example:

```javascript
"  ".blank(); // true
"".blank() ; // true
" a".blank(); // false
```

### Array prototype

Extend `Array.prototype` with the following methods:

* `Array.prototype.first` - returns the first element from the array of throws an exception
* `Array.prorotype.range = function(from, to) { ... }` - returns a new array with the numbers from `from` to `to`

For example:

```javascript
[].range(1,10); // [1,2,3,4,5,6,7,8,9,10]
```

* `Array.prototype.sum` - returns the sum of all elements of the array. We rely on that the array is only of numbers
* `Array.prototype.average` - returns the average value of all elements in the array. Again, we rely on the fact that all elements are numbers

### Number prototype

Extend `Number.prototype` with the following method:

* `Number.prototype.times = function(action) { ... }` - executes the given `action`, number times

For example:

```javascript
(5).times(function() {
  console.log("OMG!");
});

// this logs "OMG!" 5 times
```

## A point in the sky.

Create a class `Point`, which takes two arguments - `x` and `y`, which are numbers.

__Once created, `x` and `y` should be private!__ To get their value, use a getter method.

Our class should have the following consturctor setters:

* `xInc()` - increases the `x` value by 1
* `xDec()` - decreases the `x` valye by 1
* `yInc()` - increases the `y` value by 1
* `yDec()` - decreases the `y` value by 1

And the following prorotype methods:

* `Point.prototype.equals = function(point) { ... }` - takes another `Point` and returns true if both `x` and `y` of both points are equal
* `Point.prototype.toString` - returns the string representation of the point - `Point @ {x}, {y}`

## A Robot.

Create a class, called `Robot`, which takes one argument for constructor - a starting `Point`

`startPoint` should be private.

We should be able to move the Robot around with the following methods:

* `this.moveLeft = function(amount) { ... }`
* `this.moveRight = function(amount) { ... }`
* `this.moveUp = function(amount) { ... }`
* `this.moveDown = function(amount) { ... }`
* `this.getPoistion` - returns a point of the current position of the Robot.

Everywhere, `amount` is an integer.

Imagine that our coordinate system is in the upper-left corner of the screen, starting from `(0,0)`

__x increases to the right, y increases when moving down.__ - figure out how to change the starting point so the robot is moving accordingly.

An example:

```javascript
var robot = new Robot(new Point(0, 0));

robot.moveLeft(10);
robot.moveDown(5);

console.log(robot.getPosition().toString()); // Point @ -10, 5
```

## Simulation of a Pizzeria

We are going to make some async fun with Pizzas!

Create a class, called `Pizza`, which have the following properties:

* `name` of the Pizza
* `cost` of the Pizza - integer
* `timeToMake` for the Pizza - an integer which indicates the time in milliseconds

Create a class, called `PizzaOrder` which takes a `Pizza` as a constructor argument.

Each `PizzaOrder` should have its own unique id! This is how we identify the different orders.

The unique id of `PizzaOrder` should be fetched by a `getId()` method.

`PizzaOrder` should have the following methods:

* `start` - starts making the `Pizza`. `timeToMake` is important here ;)
* `ready = function(callback) { ... }` - takes a `callback` function, which is fired when the Pizza is ready - this when `timeToMake` time passes. The callback should be fired with the `Pizza` instance as an argument, followed by the `PizzaOrder` instance!

For example:

```javascript
var pizza = new Pizza("Peperoni", 100 /*cost*/, 2000 /*timeToMake in ms = 2 seconds */);

var order = new PizzaOrder(pizza);
order.ready(function(p, o) {
  // the pizza is ready now
  o.getId(); // should return the unique id
});

order.start();
```

### A simulation

Now, having `Pizza ` and `PizzaOrder` classes, implement a user interfaces, that simulates a Pizzeria!

How should it look? It's up to you!

For example, you can add a button, called `Start`, which triggers the process:

* At random time, a `Pizza` is randomly placed to a `PizzaOrder`
* The new order goes to a queue, waiting to be executed.
* When the `PizzaOrder` is started and finished, accumulate the cost from it
* Run this forever :)

You can use `setTimeout` method - https://developer.mozilla.org/en/docs/Web/API/window.setTimeout