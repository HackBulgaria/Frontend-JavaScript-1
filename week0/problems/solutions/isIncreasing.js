/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var isIncreasing = function (seq) {
    // if prev is false than [..., prev] isn't increasing
    // else, we check if [..., prev, curr] is increasing,
    // i.e. prev < curr. Inductively, we check for [..., curr, next] and so on..
    return seq.reduce(function (prev, curr) {
        if (prev !== false && prev < curr) {
            return curr;
        }
        return false;
    // if seq is increasing, seq.reduce() will return the last element,
    // but we want a boolean to be returned
    }) && true;
};

console.log('1, 2, 3, 4, 5 is increasing? ' +
    isIncreasing([1, 2, 3, 4, 5]));
console.log('1, 1, 2, 3, 4 is increasing? ' +
    isIncreasing([1, 1, 2, 3, 4]));

exports.isIncreasing = isIncreasing;
