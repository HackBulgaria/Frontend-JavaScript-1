'use strict';


var vowelsInAString = function (str) {
    var patt = /^[aeiouy]$/i;
    return str.split('').filter(function (char) {
        return patt.test(char);
    }).length;
};

console.log('Theistareykjarbunga has ' +
    vowelsInAString('Theistareykjarbunga') +
    ' vowels in it');
