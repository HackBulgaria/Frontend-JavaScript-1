/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var stringFormat = function (string, placeholders) {
    var result = string,
        placeholder;
    for (placeholder in placeholders) {
        result = result.replace('{' + placeholder + '}',
            placeholders[placeholder]);
    }
    return result;
};

exports.stringFormat = stringFormat;

/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
 */

var stringFormat = function(str, dict) {
    return str.replace(/{(.*?)}/g, function(placeholder) {
        return dict[getKeyFromPlaceholder(placeholder)];
    });
};

var getKeyFromPlaceholder = function(placeholder) {
    return placeholder.substring(1, placeholder.length - 1);
};

exports.stringFormat = stringFormat;

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
