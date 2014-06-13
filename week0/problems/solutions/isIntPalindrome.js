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

console.log('123454321 is a palindrome? ' + isIntPalindrome(123454321));
console.log('12345 is a palindrome? ' + isIntPalindrome(12345));
console.log('323323 is a palindrome? ' + isIntPalindrome(323323));
console.log('1984 is a palindrome? ' + isIntPalindrome(1984));

exports.isIntPalindrome = isIntPalindrome;
