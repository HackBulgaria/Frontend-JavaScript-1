/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var map = require('./higherOrder').map,
    filter = require('./higherOrder').filter,
    reduce = require('./higherOrder').reduce,
    any = require('./higherOrder').any,
    all = require('./higherOrder').all;


exports.testMap = function (test) {
    test.deepEqual([1, 4, 9], map(function (x) {
        return x * x;
    }, [1, 2, 3]));
    test.done();
};

exports.testMapInvalid = function (test) {
    test.throws(function f () {
        map(function (x) { return x; }, 1);
    });
    test.done();
};

exports.testFilter = function (test) {
    test.deepEqual([2], filter(function even(x) {
        return x % 2 === 0;
    }, [1, 2, 3]));
    test.done();
};

exports.testFilterInvalid = function (test) {
    test.throws(function f () {
        filter(function (x) { return x; }, 1);
    });
    test.done();
};

exports.testReduce = function (test) {
    test.equals(10, reduce(function sum(a, b) {
        return a + b;
    }, [1, 2, 3, 4], 0));
    test.done();
};

exports.testReduceInvalid = function (test) {
    test.throws(function f () {
        reduce(function (x, y) { return x + y; }, 1);
    });
    test.done();
};

exports.testAny = function (test) {
    test.equals(true, any(function even(x) {
        return x % 2 === 0;
    }, [1, 2, 3]));
    test.done();
};

exports.testAnyFalse = function (test) {
    test.equals(false, any(function even(x) {
        return x % 2 === 0;
    }, [1, 5, 3]));
    test.done();
};

exports.testAnyInvalid = function (test) {
    test.throws(function f () {
        any(function (x) { return x; }, 1);
    });
    test.done();
};

exports.testAll = function (test) {
    test.equals(true, all(function even(x) {
        return x % 2 === 0;
    }, [0, 2, 4]));
    test.done();
};

exports.testAllFalse = function (test) {
    test.equals(false, all(function even(x) {
        return x % 2 === 0;
    }, [1, 2, 3]));
    test.done();
};

exports.testAllInvalid = function (test) {
    test.throws(function f () {
        all(function (x) { return x; }, 1);
    });
    test.done();
};
