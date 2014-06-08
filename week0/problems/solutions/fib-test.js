"use strict";

var fib = require("./fib").fib;

exports.testFibonacciForOne = function(test) {
    test.equal(1, fib(1));
    test.done();
};

exports.testFibonacciForTwo = function(test) {
    test.equal(1, fib(2));
    test.done();
};

exports.testFibonacciForThree = function(test) {
    test.equal(2, fib(3));
    test.done();
};

exports.testFibonacciForTen = function(test) {
    test.equal(55, fib(10));
    test.done();
};

exports.testForNegativeNumber = function(test) {
    test.throws(
        function() {
            fib(-5);
        },
        RangeError,
        'The number should not be negative.');

    test.done();
};
