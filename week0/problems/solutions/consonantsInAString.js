/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

"use strict";
var consonantsInAString = function (str) {
    if (typeof str !== "string" ) {
        throw new TypeError("The input should be string");
    }

    var result = 0,
        allConsonants = "bcdfghjklmnpqrstvwxz";

    str.toLowerCase()
        .split("")
        .forEach(function (a) {
            if (allConsonants.indexOf(a) >= 0) {
                result += 1;
            }
        });
    return result;
};

exports.consonantsInAString = consonantsInAString;
