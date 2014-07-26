/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var isIncreasing = function (seq) {
  // if prev is false than [..., prev] isn't increasing
  // else, we check if [..., prev, curr] is increasing,
  // i.e. prev < curr. Inductively, we check for [..., curr, next] and so on..
  return seq.reduce(function (prev, curr) {
      if (prev !== false && prev < curr) {
          return curr;
      }
      return false;
  // if seq is increasing, seq.reduce() will return the last element,
  // but we want a boolean to be returned
  }) && true;
};

exports.isIncreasing = isIncreasing;

/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
 */

var isIncreasing = function(seq) {
  var
    i = 0,
    n = seq.length - 0;

  for(i; i < n; i++) {
    if(seq[i] >= seq[i + 1]) {
        return false;
    }
  }

  return true;
};

exports.isIncreasing = isIncreasing;
