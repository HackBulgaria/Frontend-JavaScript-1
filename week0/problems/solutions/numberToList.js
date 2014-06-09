/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
 */

"use strict";

var numberToList = function(n) {
    return n
        .toString()
        .split("")
        .map(function(char) {
            return parseInt(char, 10);
        });
};

exports.numberToList = numberToList;
