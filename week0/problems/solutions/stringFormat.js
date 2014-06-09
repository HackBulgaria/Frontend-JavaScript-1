/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */
var stringFormat = function (string, dict) {
    if (typeof string !== "string" || typeof dict !== "object") {
        throw new TypeError("The first argument should be string, the second - dictionary. ");
    }
    var words = string
        .match(/{([^}]+)}/g)
        .map(function (a) {
            return a.replace(/[{}]/g, "")
        });
    words.forEach(function (word) {
        if (typeof dict[word] != 'undefined') {
            string = string.replace('{' + word + '}', dict[word]);
        }
    });

    return string;
};

exports.stringFormat = stringFormat;