// map, filter, reduce, any, all
'use strict';


var map = function (func, arr) {
    var result = [],
        n;
    if (!Array.isArray(arr)) {
        throw {
            name: 'TypeError',
            message: 'map expects an array as a second argument!'
        };
    }
    n = arr.length;

    for (var i = 0; i < n; i += 1) {
        result.push(func(arr[i], i, arr));
    }
    return result;
};

var filter = function (pred, arr) {
    var result = [],
        n;
    if (!Array.isArray(arr)) {
        throw {
            name: 'TypeError',
            message: 'filter expects an array as a second argument!'
        };
    }
    n = arr.length;

    for (var i = 0; i < n; i += 1) {
        if (pred(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
};

var reduce = function (func, arr, start) {
    var result = start || 0,
        n;
    if (!Array.isArray(arr)) {
        throw {
            name: 'TypeError',
            message: 'reduce expects an array as a second argument!'
        };
    }
    n = arr.length;
    for (var i = 0; i < n; i += 1) {
        result = func(result, arr[i]);
    }
    return result;
};

var any = function (pred, arr) {
    var result = false,
        n;
    if (!Array.isArray(arr)) {
        throw {
            name: 'TypeError',
            message: 'any expects an array as a second argument!'
        };
    }
    n = arr.length;
    for (var i = 0; i < n && !result; i += 1) {
        result = pred(arr[i]);
    }
    return result;
};

var all = function (pred, arr) {
    var result = true,
        n;
    if (!Array.isArray(arr)) {
        throw {
            name: 'TypeError',
            message: 'all expects an array as a second argument!'
        };
    }
    n = arr.length;
    for (var i = 0; i < n && result; i += 1) {
        result = pred(arr[i]);
    }
    return result;
};

exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
exports.any = any;
exports.all = all;
