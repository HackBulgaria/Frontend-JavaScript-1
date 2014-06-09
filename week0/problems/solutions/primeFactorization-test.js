"use strict";

var primeFactorization = require("./primeFactorization").primeFactorization;

exports.testPrimeFactorizationThrow = function (test) {
    test.throws = function () {
        primeFactorization("adf");
    };
    test.done();
};

exports.testPrimeFactorizationThrow1 = function (test) {
    test.throws = function () {
        primeFactorization(-5.3);
    };
    test.done();
};

exports.testPrimeFactorizationThrow2 = function (test) {
    test.throws = function () {
        primeFactorization(-5);
    };
    test.done();
};

exports.testPrimeFactorization1 = function (test) {
    test.deepEqual([
        [2, 1],
        [5, 1]
    ], primeFactorization(10));
    test.done();
};

exports.testPrimeFactorization2 = function (test) {
    test.deepEqual([
        [2, 2],
        [89, 1]
    ], primeFactorization(356));
    test.done();
};

exports.testPrimeFactorization2 = function (test) {
    test.deepEqual([
        [89, 1]
    ], primeFactorization(89));
    test.done();
};
