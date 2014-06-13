/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var isDecreasing = function (seq) {
    // analogous to my isIncreasing solution, but this time we're going
    // right to left, i.e. curr is false if [curr, ...] isn't decreasing
    // else if curr is not false and prev < curr, than [prev, curr, ...]
    // will be also decreasing, and so on..
    return seq.reduceRight(function (prev, curr) {
        if (prev !== false && prev < curr) {
            return curr;
        }
        return false;
    // if seq is decreasing, seq.reduceRight will return the first element,
    // but we want a boolean to be returned
    }) && true;
};

console.log('is 8, 5, 3, 2, 1 decreasing? ' +
    isDecreasing([8, 5, 3, 2, 1]));
console.log('is 1, 2, 43, 5, 8 decreasing? ' +
    isDecreasing([1, 2, 43, 5, 8]));

exports.isDecreasing = isDecreasing;
