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
