/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

"use strict";

var sumOfDivisors = require("./sumOfDivisors").sumOfDivisors;

exports.testSumOfDivisorsThrow = function (test) {
    test.throws = function () {
        sumOfDivisors("dsffsa");
    };
    test.done();
};

exports.testSumOfDivisorsThrow1 = function (test) {
    test.throws = function () {
        sumOfDivisors(5.3);
    };
    test.done();
};

exports.testSumOfDivisors = function (test) {
    test.equal(15, sumOfDivisors(8));
    test.done();
};

exports.testSumOfDivisors1 = function (test) {
    test.equal(8, sumOfDivisors(7));
    test.done();
};

exports.testSumOfDivisors = function (test) {
    test.equal(1, sumOfDivisors(1));
    test.done();
};