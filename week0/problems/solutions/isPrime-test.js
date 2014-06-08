"use strict";

var isPrime = require("./isPrime").isPrime;

exports.testWithOne = function(test) {
    test.equal(false, isPrime(1));
    test.done();
};

exports.testWithPrimeNumber = function(test) {
    test.equal(true, isPrime(2));
    test.done();
};

exports.testWithNotPrimeNumber = function(test) {
    test.equal(false, isPrime(8));
    test.done();
};

exports.testWithNegativeNumber = function(test) {
  test.equal(false, isPrime(-10));
  test.done();
};
