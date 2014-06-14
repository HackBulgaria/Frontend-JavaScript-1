/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var listToNumber = function (list) {
  return Math.floor(list.join(''));
};

console.log('-, 0, 3, 5, 1 to number is ' +
    listToNumber(['-', 0, 3, 5, 1]));

exports.listToNumber = listToNumber;


// if we dont care about negative numbers:

var listToNumber = function(n) {
  return parseInt(n.join(""), 10);
};
