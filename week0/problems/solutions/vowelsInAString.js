/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

exports.vowelsInAString = vowelsInAString;var vowelsInAString = function (str) {
    if (typeof str !== "string") {
        throw new TypeError("The input should be string");
    }

    var result = 0,
        allVowels = "aeiouy";

    str.toLowerCase()
        .split("")
        .forEach(function (a) {
            if (allVowels.indexOf(a) >= 0) {
                result += 1;
            }
        });
    return result;
};

exports.vowelsInAString = vowelsInAString;