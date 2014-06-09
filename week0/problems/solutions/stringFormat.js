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
