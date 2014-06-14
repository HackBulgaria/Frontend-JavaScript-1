"use strict";

var forEach = require("./forEach-object").forEach;

exports.testWithArray = function(test) {
    var array = [1];

    forEach(function(value, index, arr) {
        arr[index] = 2;
    }, array);

    test.deepEqual([2], array);

    test.done();
};

exports.testWithObject = function(test) {
    var
        info = {
            "name" : "John",
            "age" : 21
        },
        result = [];

    forEach(function(value, key) {
        result.push(value);
    }, info);

    test.deepEqual(["John", 21], result);

    test.done();
};
