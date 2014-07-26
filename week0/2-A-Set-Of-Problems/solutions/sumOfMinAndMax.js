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

 /*
  * Solution by Christina Mileva
  * GitHub - https://github.com/ChrisChrisi
  */

 var sumOfMinAndMax = function (arr) {
     if (!Array.isArray(arr)) {
         throw new TypeError("The argument should be string");
     }

     if (!arr.every(function (a) {
             return (typeof a === "number");
         })) {
         throw new TypeError("The array elements should be numbers!");
     }

     if (arr.length < 1) {
         throw new TypeError("The array should have at least one element!");
     }
     var sortedArr = arr
         .sort(function (a, b) {
             return (a - b)
                 ;
         });
     return (sortedArr[0] + sortedArr[sortedArr.length - 1] );
 };

 exports.sumOfMinAndMax = sumOfMinAndMax;
