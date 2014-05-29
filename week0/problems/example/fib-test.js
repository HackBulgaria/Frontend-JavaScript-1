"use strict";

var fib = require("./fib").fib;

// nth_fibonacci(1) === 1
// nth_fibonacci(2) === 1
// nth_fibonacci(3) === 2
// nth_fibonacci(10) === 55

exports.testFibWithAllCases = function(test) {
  test.equal(1, fib(1));
  test.equal(1, fib(2));
  test.equal(2, fib(3));
  test.equal(55, fib(10));
  test.done();
};
