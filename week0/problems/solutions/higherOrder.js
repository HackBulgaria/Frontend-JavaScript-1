/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var map = function (func, arr) {
    var result = [],
        i = 0,
        n = 0;
    if (!Array.isArray(arr)) {
        throw {
            name: 'TypeError',
            message: 'map expects an array as a second argument!'
        };
    }
    n = arr.length;
    for (i = 0; i < n; i += 1) {
        result.push(func(arr[i], i, arr));
    }
    return result;
};

var filter = function (pred, arr) {
    var result = [],
        i = 0,
        n = 0;
    if (!Array.isArray(arr)) {
        throw {
            name: 'TypeError',
            message: 'filter expects an array as a second argument!'
        };
    }
    n = arr.length;
    for (i = 0; i < n; i += 1) {
        if (pred(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
};

var reduce = function (func, arr, start) {
    var result = start || arr[0],
        i = start ? 0 : 1,
        n = 0;
    if (!Array.isArray(arr)) {
        throw {
            name: 'TypeError',
            message: 'reduce expects an array as a second argument!'
        };
    }
    n = arr.length;
    for (i; i < n; i += 1) {
        result = func(result, arr[i]);
    }
    return result;
};

var any = function (pred, arr) {
    var result = false,
        i = 0,
        n = 0;
    if (!Array.isArray(arr)) {
        throw {
            name: 'TypeError',
            message: 'any expects an array as a second argument!'
        };
    }
    n = arr.length;
    for (i = 0; i < n && !result; i += 1) {
        result = pred(arr[i]);
    }
    return result;
};

var all = function (pred, arr) {
    var result = true,
        i = 0,
        n = 0;
    if (!Array.isArray(arr)) {
        throw {
            name: 'TypeError',
            message: 'all expects an array as a second argument!'
        };
    }
    n = arr.length;
    for (i = 0; i < n && result; i += 1) {
        result = pred(arr[i]);
    }
    return result;
};

exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
exports.any = any;
exports.all = all;


/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
 */

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

// var reduce = function(f, arr, initial) {
//     if(initial === undefined) {
//         throw new Error('There is no initial value.');
//     }

//     var accum = initial;

//     arr.forEach(function(elem) {
//         accum = f(accum, elem);
//     });

//     return accum;
// };

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
