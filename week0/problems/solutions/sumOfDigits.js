/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
 */

"use strict";

var sumOfDigits = function(n) {
    n = Math.abs(n);

    return n
        .toString()
        .split("")
        .map(function(char) {
            return parseInt(char, 10);
        })
        .reduce(function(a, b) {
            return a + b;
        });

};

exports.sumOfDigits = sumOfDigits;
