"use strict";

var primeFactorization = require("./primeFactorization").primeFactorization;

exports.testWithNotPrimeNumbers = function(test) {
    test.deepEqual([ [2, 1], [5, 1] ], primeFactorization(10));
    test.deepEqual([ [2, 1], [7, 1] ], primeFactorization(14));
    test.deepEqual([ [2, 2], [89, 1] ], primeFactorization(356));
    test.deepEqual([ [2, 3], [5, 3] ], primeFactorization(1000));
    test.done();
};

exports.testWithPrimeNumber = function(test) {
    test.deepEqual([ [89, 1] ], primeFactorization(89));
    test.done();
};
