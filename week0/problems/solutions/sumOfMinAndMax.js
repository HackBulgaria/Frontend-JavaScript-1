/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';

// O(n)
var sumOfMinAndMax = function (arr) {
    var min = arr[0], max = min;

    arr.forEach(function (n) {
        if (n < min) {
            min = n;
        } else if (n > max) {
            max = n;
        }
    });
    // if arr is empty, min + max will be NaN,
    //so it will return 0
    return min + max || 0;
};

exports.sumOfMinAndMax = sumOfMinAndMax;
