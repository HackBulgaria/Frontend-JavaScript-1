/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var isIntPalindrome = function (number) {
  return number
      .toString()
      .split('')
      // checks if every item is equal to it's symmetric element in the array
      .every(function (value, index, arr) {
          return value === arr[arr.length - index - 1];
      });
};

exports.isIntPalindrome = isIntPalindrome;

/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
 */

var isIntPalindrom = function(n) {
  return n.toString() === n
                            .toString()
                            .split("")
                            .reverse()
                            .join("");
};

exports.isIntPalindrom = isIntPalindrom;
