'use strict';


var numberToList = function (n) {
    return n.toString().split('');
};

console.log(numberToList(192834) +
    ' is 192834 to list');

exports.numberToList = numberToList;
