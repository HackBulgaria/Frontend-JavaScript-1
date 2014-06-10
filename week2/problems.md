# Problems to be solved using OOP JavaScript

## A Pair or two

Create a class `Pair`, which takes two arguments of variable type - `left` and `right`

The class should have the following __prototype__ methods:

* `Pair.prototype.equals(pair)` - the method takes another `Pair` and returns true if they both `left` and `right` of both pairs are strictly equal
* `Pair.prototype.toString()` - returns the pair in the following string format - `({left}, {right})` where `{left}` and `{right}` are replaced by the given values.
* `Pair.prototype.toList()` - returns a list of `[left, right]`
* `Pair.prototype.combine(f)` - `f` is a function of two arguments (`left` and `right`) - combine returns the generated value of the passed function `f`

Few examples:

```javascript
var p = new Pair(4, 6);

p.combine(function(left, right) {
    return left + right;
}); // 10
```

## A point in the sky.

Create a class `Point`, which takes two arguments - `x` and `y`, which are numbers.

__Once created, `x` and `y` should be private!__ To get their value, use a getter method.

Our class should have the following prototype methods:

* `Point.prototype.xInc()` - increases the `x` value by 1
* `Point.prototype.xDec()` - decreases the `x` valye by 1
* `Point.prototype.yInc()` - increases the `y` value by 1
* `Point.prototype.yDec()` - decreases the `y` value by 1
* `Point.prototype.equals(point)` - takes another `Point` and returns true if both `x` and `y` of both points are equal
* `Point.prototype.toString()` - returns the string representation of the point - `Point @ {x}, {y}`

## A Robot.

Create a class, called `Robot`, which takes one argument for constructor - a starting `Point`

We should be able to move the Robot around with the following methods:

* `Robot.prototype.moveLeft(amount)`
* `Robot.prototype.moveRight(amount)`
* `Robot.prototype.moveUp(amount)`
* `Robot.prototype.moveDown(amount)`
* `Robot.prototype.getPoistion()` - returns a point of the current position of the Robot.

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

`PizzaOrder` should have the following Prototype methods:

* `PizzaOrder.prototype.start()` - starts making the `Pizza`. `timeToMake` is important here ;)
* `PizzaOrder.prototype.ready(callback)` - takes a `callback` function, which is fired when the Pizza is ready - this when `timeToMake` time passes. The callback should be fired with the `Pizza` instance as an argument, followed by the `PizzaOrder` instance!

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