## For each for objects

Given the following implementation of `forEach`:

```javascript
var forEach = function(f, arr) {
  var
    i = 0,
    n = arr.length;

    for(i; i < n; i++) {
      f(arr[i], i, arr);
    }
};
```

Alter it so it can iterate objects too.

For example:

```javascript
var info = {
    "name" : "Rado",
    "age" : 23
};

forEach(function(value, key) {
   console.log(key, value);
   // name - Rado
   // age - 23
}, info);
```

Use `Array.isArray()` to check if a given argument is an array.

## String format

Implement a function, called `format(str, dict)` which formats the given string, by replacing the placeholders with values from `dict`.

For example:

```javascript
var formatted = format("{lang} is a very weird {thing}!", {
  "lang" : "JavaScript",
  "thing" : "language"
});

console.log(formatted); // JavaScript is a very weird language!
```

The placeholders should have name, which serves as a key in `dict`.
The placeholder format is: `{name}`

## Let's map

Implement a basic map function with the following signature: `map(f, arr)`

This funcitons maps `f` on each element of `arr`, creating an entirely new array.

For example:

```javascript
var result = map(function(x) {
    return x * x;
}, [1,2,3]);

console.log(result); // [1, 4, 9]
```

## Let's filter

Implement a basic filter function with the following signature: `filter(pred, arr)` where `pred` is a function, that returns true or false (A predicate)

For example:

```javascript
var users = [{
    "name" : "Rado",
    "score" : 50
}, {
    "name" : "Ivan",
    "score" : 67
}, {
    "name" : "Vlado",
    "score" : 30
}];

// filter all users with score bigger than 40

var result = filter(function(user) {
    return user.score > 40;
}, users);

console.log(result);
/*
[ { name: 'Rado', score: 50 },
  { name: 'Ivan', score: 67 } ]
*/
```

## Reduce arrays

Implement a reducing function, that takes a binary operation (a function of two arguments), an array and a starting value.

The function should return a single value, that is obtained by accumulating the result of the operation for every element in the array.

For example, lets have the following array: `[a1, a2, a3, a4, a5]` and a binary operation: `oper` and a starting value: `start`

If we reduce the given list with the given binary operation, we will obtain the following result: `start oper a1 oper a2 oper a3 oper a4 oper a5`

If oper is the plus sign (`+`), we will have : `start + a1 + a2 + a3 + a4 + a5`, which is the sum of all elements in the list.

This is an example of the `reduce` method of lists in JavaScript:

```javascript
var sum = function(arr) {
    return arr.reduce(function(acc, next) {
        return acc + next;
    }, 0);
};
```

## Any and All

Implement to higher-order functions, called `any` and `all`.

Both functions have the following signature:

```javascript
var any = function(pred, arr) {

};

var all = function(pred, arr) {

};
```

* `any` returns true if any of the elements in `arr` returns true if called with the predicate `pred`. False otherwise.
* `all` returns true if all of the elements in `arr` returns true if called with the predicate `pred`. False otherwise.

In JavaScript, those functions are implemented as array methods:

* `any` is `Array.prototype.some` - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
* `all` is `Array.prototype.every` - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every
