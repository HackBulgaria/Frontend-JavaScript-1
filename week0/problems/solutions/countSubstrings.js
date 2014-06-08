/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
*/

"use strict";

var countSubstrings = function(haystack, needle) {
    var occurrences = haystack.match(new RegExp(needle, "g"));
    return occurrences ? occurrences.length : 0;
};

exports.countSubstrings = countSubstrings;
