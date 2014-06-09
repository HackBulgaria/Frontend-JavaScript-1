/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

"use strict";
var nth_fibonacci = require("./fib").fib;

exports.testFiboThrow = function (test) {
    test.throws(function () {
        nth_fibonacci("asd");
    });
    test.done();
};

exports.testFiboThrow = function (test) {
    test.throws(function () {
        nth_fibonacci(1.5);
    });
    test.done();
};

exports.testFiboOne = function (test) {
    test.equal(1, nth_fibonacci(1));
    test.done();
};

exports.testFiboTwo = function (test) {
    test.equal(1, nth_fibonacci(2));
    test.done();
};

exports.testFiboThree = function (test) {
    test.equal(2, nth_fibonacci(3));
    test.done();
};

exports.testFiboTen = function (test) {
    test.equal(55, nth_fibonacci(10));
    test.done();
};