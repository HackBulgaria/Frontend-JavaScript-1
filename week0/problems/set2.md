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
