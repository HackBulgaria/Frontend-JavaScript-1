/*
 * Solution by Daniel Taskoff
 * @github: https://github.com/dtaskoff/
 */

'use strict';

// O(n)
var sumOfMinAndMax = function (arr) {
  if(arr.length === 0) {
    throw new TypeError("Array is empty");
  }

  var min = arr[0], max = min;

  arr.forEach(function (n) {
      if (n < min) {
          min = n;
      } else if (n > max) {
          max = n;
      }
  });
  // if arr is empty, min + max will be NaN,
  //so it will return null
  return min + max;
};

exports.sumOfMinAndMax = sumOfMinAndMax;

/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
 */

var sumOfMinAndMax = function(arr) {
  if(arr.length === 0) {
    throw new TypeError("Array is empty");
  }

  return Math.max.apply(null, arr) + Math.min.apply(null, arr);
};

 exports.sumOfMinAndMax = sumOfMinAndMax;
