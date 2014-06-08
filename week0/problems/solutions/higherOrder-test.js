"use strict";

var
    map    = require("./higherOrder").map,
    filter = require("./higherOrder").filter,
    reduce = require("./higherOrder").reduce,
    any    = require("./higherOrder").any,
    all    = require("./higherOrder").all;

exports.testMap = function(test) {
    var
        result1 = [1, 4, 9],
        mapped1 =  map(function(x) {
            return x * x;
        }, [1,2,3]),

        result2 = [false, true],
        mapped2 = map(function(x) {
            return x > 20;
        }, [10, 30]);

    test.deepEqual(result1, mapped1);
    test.deepEqual(result2, mapped2);
    test.done();
};

exports.testFilter = function(test) {
    var
        users = [{
            "name" : "John",
            "score" : 100
        }, {
            "name" : "Ivan",
            "score" : 67
        }, {
            "name" : "Vlado",
            "score" : 30
        }],

        result = [{
             "name" : "John",
             "score" : 100
        }],

        filtered = filter(function(user) {
            return user.score > 70;
        }, users);

    test.deepEqual(result, filtered);
    test.done();
};


exports.testReduce = function(test) {
    var reduced1 = reduce(function(acc, next) {
        return acc + next;
    }, 0, [1, 2, 3]);

    var reduced2 = reduce(function(acc, next) {
        return acc && next;
    }, false, [true]);

    var reduced3 = reduce(function(acc, next) {
        return acc * next;
    }, 2, [3, 4, 5]);

    test.equal(6, reduced1);
    test.equal(false, reduced2);
    test.equal(120, reduced3);

    test.throws(
        function() {
            reduce(function(){}, 3);
        },
        Error,
        'There is no initial value.'
    );

    test.done();
};

exports.testAny = function(test) {
    var
        result1 = any(function(x) {
            return x > 20;
        }, [10, 25, 49]),

        result2 = any(function(x) {
            return x > 20;
        }, [2, 4]);

    test.equal(true, result1);
    test.equal(false, result2);
    test.done();
};

exports.testAll = function(test) {
    var
        result1 = all(function(x) {
            return x > 20;
        }, [30, 35, 49]),

        result2 = all(function(x) {
            return x > 20;
        }, [2, 4]);

    test.equal(true, result1);
    test.equal(false, result2);
    test.done();
};
