/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var isDecreasing = function (seq) {
  // analogous to my isIncreasing solution, but this time we're going
  // right to left, i.e. curr is false if [curr, ...] isn't decreasing
  // else if curr is not false and prev < curr, than [prev, curr, ...]
  // will be also decreasing, and so on..
  return seq.reduceRight(function (prev, curr) {
    if (prev !== false && prev < curr) {
        return curr;
    }
    return false;
  // if seq is decreasing, seq.reduceRight will return the first element,
  // but we want a boolean to be returned
  }) && true;
};

exports.isDecreasing = isDecreasing;
/*
 * Solution by Emanuela Mollova
 * Github - https://github.com/EmanuelaMollova/
 */

var isDecreasing = function(seq) {
  var
    i = 0,
    n = seq.length - 1;

  for(i; i < n; i++) {
    if(seq[i] <= seq[i + 1]) {
        return false;
    }
  }

  return true;
};

exports.isDecreasing = isDecreasing;
