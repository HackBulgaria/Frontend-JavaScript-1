'use strict';


var countSubstrings = function (haystack, needle) {
    return haystack.split(needle).length - 1;
};

console.log('haystack has ' +
    countSubstrings('haystack', 'ays') +
    ' ays\' in it');

console.log('needle has ' +
    countSubstrings('needle', 'e') +
    ' es in it');
