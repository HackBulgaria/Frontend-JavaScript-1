/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
 */

"use strict";

var isIntPalindrom = function(n) {
    return n.toString() === n.toString().split("").reverse().join("");
};

exports.isIntPalindrom = isIntPalindrom;
