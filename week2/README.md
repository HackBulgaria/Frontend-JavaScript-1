# Materials for week 2

## Object Oriented JavaScript

We are going to start working with OOP JavaScript! There are few very different things from the rest of the OOP world (For example, there are no classes)

* A good start is this reference - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
* [Here is a video](https://www.youtube.com/watch?feature=player_embedded&v=PMfcsYzj-9M) (27 minutes) that covers all OOP concepts in JavaScript

## Notes for OOP JavaScript

### Making a new object - Constructor Function

We can make a new object of a given type, by providing the so-called __"constructor function"__.

This is a normal JavaScript function, that we write with uppercase to indicate that it will be a constructor for an object.

For example:

```javascript
function Person(firstName, secondName, age) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
}

// we call the function with this
var p = new Person("Bobi", "Donchev", 20);
```

Now the variable `p` is a object from the type `Person`

```javascript
// accessing:
p.firstName;
p.secondName;
p.age;


// modifying
p.firstName = "Ivo";
p.secondName = "Donchev";
p.age = 21;
```

If we want to add methods to our `Person` class, we can attach functions to this:

```javascript
function Person(firstName, secondName, age) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;

    this.getName = function() {
      return [firstName, secondName].join(" ");
    }

    this.sayHello = function() {
      return ["I", "am", this.getName()].join(" ");
    }
}
```

Now if we want to use those methods, we can access them with the dot notation:

```javascript
var p = new Person("Bobi", "Donchev", 20);

p.getName(); // "Bobi Donchev"
p.sayHello(); // "I am Bobi Donchev"
```

### Prototype of an object - adding methods

In JavaScript, every object have something, that is called a prototype.

The prototype is simply another Object, "linked" to our current object.

For example, in JavaScript, every object "inherits" from `Object`. But since we have no syntax for classes or inheritence, it is done by linking the prototype chain.

Check this:

![Object Prototype](https://raw.githubusercontent.com/HackBulgaria/Frontend-JavaScript-1/master/week2/material_images/object_prototype.png)

Every object, has a hidden `__proto__` property, which links to:

1. First, its own prototype - we will see next that is this
2. In the current object's prototype, there is another `__proto__`, which links to the prototype of `Object`, where all `Object` methods are linked.

Which leads us to the next stage - where should we add methods? To `this` or to our prototype?

A good topic on the difference between `this.method` vs `prototype.method` can be found here - http://stackoverflow.com/questions/310870/use-of-prototype-vs-this-in-javascript

#### Adding methods to this

If we add methods to `this`, they will be created every time we call the constructor function with `new`

But when we create a new object, the method, attached to `this` will alocate it's own memory.

This means that if we create 10 instances of a given class, we will have 10 different instances for that method, attached to `this`.

If we want to have only 1 instance of the method for all object instances, we have to add it to the prototype of the object!

#### Adding methods to prototype

Every object has a `prototype` object, which is one for all instances.

If we want to add a method to the prototype, we can do the following:

```javascript
function Person(firstName, secondName, age) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;

    this.getName = function() {
      return [firstName, secondName].join(" ");
    }
}

Person.prototype.sayHello = function() {
  return ["I", "am", this.getName()].join(" ");
}
```

Now, `sayHello` is attached to the prototype and the function wont be created with every instance of `Person`

We can still call `sayHello()` the standard way:

```javascript
var p = new Person("Bobi", "Donchev", 20);

p.getName(); // "Bobi Donchev"
p.sayHello(); // "I am Bobi Donchev"
```

`this` in the prototype function is the same `this`, which we use in the constructor function.

### Making things private - getters and setters

### Literal Objects

### Object.create()

### Literal Objects with private parts - closures

A basic closure example with a counter:

```javascript
var counter = (function() {
  var count = 0;

  return function() {
    count = count + 1;
    return count;
  }
} () );

counter(); // 1
counter(); // 2
counter(); // 3
// and so on ...
```

The important thing here is that the returned function sees the private `count` and keeps the value in memory, even after we have exited the funciton.

If we want to create a literal object with private parts, we enclose the literal object with an anonymous function, that calls itself immediately.

__This is called an IIFE (Immediately Invoked Function Expression)__

Here is an example with a `basePerson` with private parts:

```javascript
// function closure
var basePerson = (function() {
  var _private = {
    personName : ""
  };

  return {
    setName : function(name) {
      _private.personName = name;
    },
    getName : function() {
      return _private.personName;
    }
  };
} () );
```

In our exampe, `_private` is seen only inside the enclosed function.

The function returns a object literal, where we expose the public parts.

The magic here is that the functions inside the public parts see `_private`, but private cannot be used or seen anywhere else.

### Inheritence in JavaScript

```javascript
"use strict";

function Person(firstName, secondName, age) {
  var initials = [firstName[0], secondName[0]].join("");

  this.getName = function() {
    return [firstName, secondName].join(" ");
  }

  this.getAge = function() {
    return age;
  }

  this.getInitials = function() {
    return initials;
  }
}

Person.prototype.sayHello = function() {
  return "I AM " + this.getName();
};

Person.prototype.toString = function() {
  return this.getName();
};


function Student(firstName, secondName, age) {
  Person.call(this, firstName, secondName, age);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


Student.prototype.toString = function() {
  return Person.prototype.toString.call(this) + "I am a student";
}

var s = new Student("Bobi", "Donchev", 20);
console.log(s.toString());
```
