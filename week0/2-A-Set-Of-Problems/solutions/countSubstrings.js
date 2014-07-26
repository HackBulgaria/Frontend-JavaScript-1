/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var countSubstrings = function (haystack, needle) {
    return haystack.split(needle).length - 1;
};

exports.countSubstrings = countSubstrings;

/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
 */

var countSubstrings = function(haystack, needle) {
  var occurrences = haystack.match(new RegExp(needle, "g"));
  return occurrences ? occurrences.length : 0;
};

exports.countSubstrings = countSubstrings;
