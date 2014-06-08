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

console.log('123454321 is a palindrome? ' + isIntPalindrome(123454321));
console.log('12345 is a palindrome? ' + isIntPalindrome(12345));

exports.isIntPalindrome = isIntPalindrome;
