/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';

// if n is negative
// the result array will have "-" as a first element
var numberToList = function (n) {
    return n.toString().split('');
};

console.log(numberToList(192834) +
    ' is 192834 to list');

exports.numberToList = numberToList;
