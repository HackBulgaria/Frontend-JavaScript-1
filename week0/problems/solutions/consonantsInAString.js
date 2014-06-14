/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var consonantsInAString = function (str) {
  var patt = /^[bcdfghjklmnpqrstvwxz]$/i;
  return str.split('').filter(function (char) {
      return patt.test(char);
  }).length;
};

exports.consonantsInAString = consonantsInAString;

/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
 */


var consonantsInAString = function(str) {
  var consonants = 'bcdfghjklmnpqrstvwxz';
  return countCharsFromGroup(generateGroupOfLetters(consonants), str);
};

var generateGroupOfLetters = function(letters) {
  return letters.toUpperCase().split("").concat(letters.split(""));
};

var countCharsFromGroup = function(group, str) {
  return group.map(function(char) {
      return countSubstrings(str, char);
  }).reduce(function(a, b) {
      return a + b;
  });
};

var countSubstrings = function(haystack, needle) {
  var occurrences = haystack.match(new RegExp(needle, "g"));
  return occurrences ? occurrences.length : 0;
};

exports.consonantsInAString = consonantsInAString;
