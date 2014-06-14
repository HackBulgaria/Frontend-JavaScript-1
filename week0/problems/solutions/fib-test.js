/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var fib = require('./fib').fib;

exports.testNthFib0 = function (test) {
    test.equal(0, fib(0));
    test.done();
};

exports.testNthFib2 = function (test) {
    test.equal(1, fib(2));
    test.done();
};

exports.testNthFib51 = function (test) {
    test.equal(20365011074, fib(51));
    test.done();
};
