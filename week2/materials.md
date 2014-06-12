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

### Prototype of an object - adding methods

### Factory - instanceof this - calling with new vs. just calling the constructor

### Making things private - getters and setters

### Literal Objects

### Object.create()

### Literal Objects with private parts

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
Student.constructor = Student;


Student.prototype.toString = function() {
  return Person.prototype.toString.call(this) + "I am a student";
}

var s = new Student("Bobi", "Donchev", 20);
console.log(s.toString());
```
