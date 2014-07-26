/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var forEach = function (func, arr) {
    var i = 0,
        n = 0;
    if (!Array.isArray(arr)) {
        throw {
            name: 'TypeError',
            message: 'forEach expects an array as a second argument!'
        };
    }
    n = arr.length;
    for (i = 0; i < n; i += 1) {
        func(arr[i], i, arr);
    }
};

exports.forEach = forEach;
