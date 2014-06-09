/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
*/

"use strict";

var isNumberBalanced = function(n) {
    var numberToChars = n.toString().split(""),
        half = parseInt(numberToChars.length / 2, 10);

    if (numberToChars.length === 1) {
        return true;
    }

    var left  = parseInt(numberToChars.slice(0, half).join(""), 10),
        rigth = parseInt(numberToChars.slice(-half).join(""), 10);

    return sumOfDigits(left) === sumOfDigits(rigth);
};

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

exports.isNumberBalanced = isNumberBalanced;
