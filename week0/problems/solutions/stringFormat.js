/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
 */

"use strict";

var stringFormat = function(str, dict) {
    return str.replace(/{(.*?)}/g, function(placeholder) {
        return dict[getKeyFromPlaceholder(placeholder)];
    });
};

var getKeyFromPlaceholder = function(placeholder) {
    return placeholder.substring(1, placeholder.length - 1);
};

exports.stringFormat = stringFormat;
