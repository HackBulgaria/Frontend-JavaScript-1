'use strict';


var forEach = function (func, arr) {
    if (!Array.isArray(arr)) {
        throw {
            name: 'TypeError',
            message: 'forEach expects an array as a second argument!'
        };
    }
    var n = arr.length;
    for (var i = 0; i < n; i += 1) {
        func(arr[i], i, arr);
    }
};

exports.forEach = forEach;
