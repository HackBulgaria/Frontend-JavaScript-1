/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

"use strict";

var primeNumberOfDivisors = require("./primeNumberOfDivisors").primeNumberOfDivisors;

exports.testPrimeNumberOfDivisorThrow = function (test) {
    test.throws = function () {
        primeNumberOfDivisors("fhdsdg");
    };
    test.done();
};

exports.testPrimeNumberOfDivisorThrow1 = function (test) {
    test.throws = function () {
        primeNumberOfDivisors(-5);
    };
    test.done();
};

exports.testPrimeNumberOfDivisorThrow2 = function (test) {
    test.throws = function () {
        primeNumberOfDivisors(5.3);
    };
    test.done();
};

exports.testPrimeNumberOfDivisorTrue = function (test) {
    test.equal(true, primeNumberOfDivisors(7));
    test.done();
};

exports.testPrimeNumberOfDivisorFalse = function (test) {
    test.equal(false, primeNumberOfDivisors(8));
    test.done();
};