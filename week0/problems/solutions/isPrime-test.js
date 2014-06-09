/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

"use strict";

var isPrime = require("./isPrime").isPrime;

exports.testIsPrimeThrow = function (test) {
    test.throws = function () {
        isPrime("sdgfdgh");
    };
    test.done();
};

exports.testIsPrimeThrow1 = function (test) {
    test.throws = function () {
        isPrime([1, 3]);
    };
    test.done();
};

exports.testIsPrimeThrow2 = function (test) {
    test.throws = function () {
        isPrime(2.3);
    };
    test.done();
};

exports.testIsPrime1 = function (test) {
    test.equal(false, isPrime(1));
    test.done();
};

exports.testIsPrime2 = function (test) {
    test.equal(true, isPrime(2));
    test.done();
};

exports.testIsPrimeTrue = function (test) {
    test.equal(true, isPrime(89));
    test.done();
};

exports.testIsPrimeFalse = function (test) {
    test.equal(false, isPrime(88));
    test.done();
};