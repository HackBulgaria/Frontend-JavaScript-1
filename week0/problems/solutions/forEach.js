/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

"use strict";
var forEach = function (f, arr) {

    if (!Array.isArray(arr) || arr.length < 1) {
        throw new TypeError('Invalid parameter');
    }
    var i = 0,
        n = arr.length;
    for (i; i < n; i += 1) {
        f(arr[i], i, arr);
    }
};

exports.forEach = forEach;