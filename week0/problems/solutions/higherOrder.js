/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
 */

"use strict";

var map = function(f, arr) {
    var result = [];

    arr.forEach(function(value, index, arr) {
        result.push(f(value, index, arr));
    });

    return result;
};

var filter = function(f, arr) {
    var result = [];

    arr.forEach(function(value, index, arr) {
        if(f(value, index, arr)) {
            result.push(value);
        }
    });

    return result;
};

var reduce = function(f, initial, arr) {
    if(initial === undefined) {
        throw new Error('There is no initial value.');
    }

    var accum = initial;

    arr.forEach(function(elem) {
        accum = f(accum, elem);
    });

    return accum;
};

var any = function(pred, arr) {
    return arr.map(pred).reduce(function(a, b) {
        return a || b;
    });
};

var all = function(pred, arr) {
    return arr.map(pred).reduce(function(a, b) {
        return a && b;
    });
};

exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
exports.any = any;
exports.all = all;
