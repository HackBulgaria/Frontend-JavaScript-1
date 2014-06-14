/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var vowelsInAString = function (str) {
    var patt = /^[aeiouy]$/i;
    return str.split('').filter(function (char) {
        return patt.test(char);
    }).length;
};

exports.vowelsInAString = vowelsInAString;

/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
 */

var vowelsInAString = function(str) {
  return countCharsFromGroup(generateGroupOfLetters('aeiouy'), str);
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

exports.vowelsInAString = vowelsInAString;

/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

exports.vowelsInAString = vowelsInAString;var vowelsInAString = function (str) {
    if (typeof str !== "string") {
        throw new TypeError("The input should be string");
    }

    var result = 0,
        allVowels = "aeiouy";

    str.toLowerCase()
        .split("")
        .forEach(function (a) {
            if (allVowels.indexOf(a) >= 0) {
                result += 1;
            }
        });
    return result;
};

exports.vowelsInAString = vowelsInAString;
