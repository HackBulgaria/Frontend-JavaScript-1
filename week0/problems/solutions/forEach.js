'use strict';


var forEach = function (func, arr) {
    var n = arr.length;
    for (var i = 0; i < n; i += 1) {
        func(arr[i], i, arr);
    }
};

exports.forEach = forEach;
