/*
 * Solution by Emanuela Mollova
 * Github - https://github.com/EmanuelaMollova/
 */

"use strict";

var isDecreasing = function(seq) {
    for(var i = 0; i < seq.length - 1; i++) {
        if(seq[i] <= seq[i + 1]) {
            return false;
        }
    }

    return true;
};

exports.isDecreasing = isDecreasing;
