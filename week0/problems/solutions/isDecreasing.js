'use strict';


var isDecreasing = function (seq) {
    return seq.reduceRight(function (prev, curr) {
        if (prev !== false && prev < curr) {
            return curr;
        }
        return false;
    }) && true;
};

console.log('is 8, 5, 3, 2, 1 decreasing? ' +
    isDecreasing([8, 5, 3, 2, 1]));
console.log('is 1, 2, 43, 5, 8 decreasing? ' +
    isDecreasing([1, 2, 43, 5, 8]));
