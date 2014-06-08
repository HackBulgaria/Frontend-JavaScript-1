'use strict';


var isIncreasing = function (seq) {
    return seq.reduce(function (prev, curr) {
        if (prev !== false && prev < curr) {
            return curr;
        }
        return false;
    }) && true;
};

console.log('1, 2, 3, 4, 5 is increasing? ' +
    isIncreasing([1, 2, 3, 4, 5]));
console.log('1, 1, 2, 3, 4 is increasing? ' +
    isIncreasing([1, 1, 2, 3, 4]));
