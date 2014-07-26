/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var primeFactorization = require('./primeFactorization').primeFactorization;

exports.testPrimeFactorization18 = function (test) {
    test.deepEqual([[2, 1], [3, 2]], primeFactorization(18));
    test.done();
};

exports.testPrimeFactorization12345678 = function (test) {
    test.deepEqual([[2, 1], [3, 2], [47, 1], [14593, 1]],
        primeFactorization(12345678));
    test.done();
};
