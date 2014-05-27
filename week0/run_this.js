"use strict";

var factorial = function(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial (n - 1);
};

console.log("You have successfully ran this JavaScript file.");
console.log("Here is the factorial function for 20:");
console.log(factorial(20));
