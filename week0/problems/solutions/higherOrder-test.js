 /*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */ 
 
"use strict";

var functions = require("./higherOrder");

var map = functions.map;
var mult = function(a) {
    return a*a;
};

var even = function(a) {
    if(a % 2 === 0) {
        return true;
    }
    else{
        return false;
    }
};

var add = function(a,b) {
    return a+b;
};

var arr = [1,2,3,4];
exports.testMapThrows = function(test) {
    test.throws = function() {
        map(mult, "dfgfdfg");
    };
    test.done();
};

exports.testMap = function(test) {
    test.deepEqual([1,4,9, 16], map(mult, arr));
    test.done();
};

exports.testMap1 = function(test) {
    test.deepEqual([], map(mult, []));
    test.done();
};

var filter = functions.filter;

exports.testFilterThrows = function(test) {
    test.throws = function() {
        filter(even, "dfgfdfg");
    };
    test.done();
};

exports.testFilter = function(test) {
    test.deepEqual([2,4], filter(even, arr));
    test.done();
};

exports.testFilter1 = function(test) {
    test.deepEqual([], filter(even, []));
    test.done();
};

exports.testFilter2 = function(test) {
    test.deepEqual([], filter(even, [1,3,5]));
    test.done();
};

exports.testFilter1 = function(test) {
    test.deepEqual([2,4,6], filter(even, [2,4,6]));
    test.done();
};
var reduce = functions.reduce;

exports.testReduceThrows = function(test) {
    test.throws = function() {
        reduce(add, "dfgfdfg");
    };
    test.done();
};
exports.testReduceThrows1 = function(test) {
    test.throws = function() {
        reduce(add, []);
    };
    test.done();
};

exports.testReduce = function(test) {
    test.equal(10, reduce(add, arr));
    test.done();
};

var any = functions.any;

exports.testAnyThrows = function(test) {
    test.throws = function() {
        any(even, "dfgfdfg");
    };
    test.done();
};

exports.testAny = function(test) {
    test.equal(true, any(even, arr));
    test.done();
};

exports.testAny1 = function(test) {
    test.equal(false, any(even, [1,5,7]));
    test.done();
};

var all = functions.all;

exports.testAllThrows = function(test) {
    test.throws = function() {
        all(even, "dfgfdfg");
    };
    test.done();
};

exports.testAll = function(test) {
    test.equal(false, all(even, arr));
    test.done();
};

exports.testAll1 = function(test) {
    test.equal(true, all(even, [2,4,6]));
    test.done();
};





