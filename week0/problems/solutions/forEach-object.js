/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
 */

"use strict";

// supports both arrays and objects
var forEach = function(f, items) {
    if(Array.isArray(items)) {
       var i = 0,
           n = items.length;

        for(i; i < n; i++) {
            f(items[i], i, items);
        }
    } else {
        for(var key in items) {
            if(items.hasOwnProperty(key)) {
                f(items[key], key);
            }
        }
    }
};

exports.forEach = forEach;
