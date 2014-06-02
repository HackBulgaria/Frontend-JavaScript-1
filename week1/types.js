"use strict";

// list with different types in JavaScript
var types = [
  5, // "number"
  "You look good!", // "string"
  { "name" : "Dude1"}, // "object"
  function(x) {
    return x * x;
  }, // "function"
  [1,2,3], // "object" :(
  true // "boolean"
];

types.forEach(function(value) {
  console.log(value, typeof value);
});

var a = 5;

if(typeof a === "number") {
  console.log(a + " is a number");
}
