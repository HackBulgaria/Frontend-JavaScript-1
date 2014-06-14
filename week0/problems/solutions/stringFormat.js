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
