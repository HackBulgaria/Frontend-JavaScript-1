'use strict';


var listToNumber = function (list) {
    return Math.floor(list.join(''));
};

console.log('-, 0, 3, 5, 1 to number is ' +
    listToNumber(['-', 0, 3, 5, 1]));
