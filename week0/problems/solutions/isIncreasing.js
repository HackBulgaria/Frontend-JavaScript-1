/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
 */

"use strict";

var isIncreasing = function(seq) {
    for(var i = 0; i < seq.length - 1; i++) {
        if(seq[i] >= seq[i + 1]) {
            return false;
        }
    }

    return true;
};

exports.isIncreasing = isIncreasing;
