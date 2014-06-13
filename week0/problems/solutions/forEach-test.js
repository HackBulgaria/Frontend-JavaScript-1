/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var forEach = require('./forEach').forEach;

exports.testForEach = function (test) {
    var result = [];
    forEach(function (x) {
        result.push(x * x);
    }, [1, 2, 3, 4, 5]);
    test.deepEqual([1, 4, 9, 16, 25], result);
    test.done();
};

exports.testForEachNonArray = function (test) {
    test.throws(function f () {
        forEach(function (x) { return x; }, 1);
    });
    test.done();
};
