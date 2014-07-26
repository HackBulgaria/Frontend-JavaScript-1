"use strict";

// we require the module name - without .js
// and after this - the function that we want to test
var factorial = require("./factorial").factorial;

exports.testFactorialForZero = function(test) {
  test.equal(1, factorial(0));
  test.done();
};

exports.testFactorialForFive = function(test) {
  test.equal(120, factorial(5));
  test.done();
};
