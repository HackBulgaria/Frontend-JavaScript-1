/*
  Solution by Daniel Taskoff
  @github: https://github.com/dtaskoff/
*/

'use strict';


var sumOfDigits = function (number) {
  var sum = 0;
  // counts only digits before the floating point
  number = Math.floor(Math.abs(number));

  while (number > 0) {
    sum += parseInt(number % 10, 10);
    number = parseInt(number / 10, 10);
  }
  return sum;
};

var isNumberBalanced = function (number) {
  // we find the number of digits in number,
  // calculate the sum of the digits left to middle,
  // then calculate the sum of the digits middle to right,
  // and if the sums are equal we're true :)
  var length = number.toString().length,
    middle = Math.floor(length / 2),
    leftSum = sumOfDigits(number % Math.pow(10, middle)),
    // if number has odd number of digits,
    // we don't want to count the middle one (digit)
    rightSum = sumOfDigits(number / Math.pow(10, middle + length % 2));
  return leftSum === rightSum;
};

exports.isNumberBalanced = isNumberBalanced;

/*
 * Solution by Emanuela Mollova
 * GitHub - https://github.com/EmanuelaMollova/
 */

var isNumberBalanced = function(n) {
  var numberToChars = n.toString().split(""),
      half = parseInt(numberToChars.length / 2, 10);

  if (numberToChars.length === 1) {
      return true;
  }

  var left  = parseInt(numberToChars.slice(0, half).join(""), 10),
      rigth = parseInt(numberToChars.slice(-half).join(""), 10);

  return sumOfDigits(left) === sumOfDigits(rigth);
};

var sumOfDigits = function(n) {
  n = Math.abs(n);

  return n
      .toString()
      .split("")
      .map(function(char) {
          return parseInt(char, 10);
      })
      .reduce(function(a, b) {
          return a + b;
      });
};

exports.isNumberBalanced = isNumberBalanced;
