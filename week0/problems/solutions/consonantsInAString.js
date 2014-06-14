/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var consonantsInAString = function (str) {
    var patt = /^[bcdfghjklmnpqrstvwxz]$/i;
    return str.split('').filter(function (char) {
        return patt.test(char);
    }).length;
};

console.log('Theistareykjarbunga has ' +
    consonantsInAString('Theistareykjarbunga') +
    ' vowels in it');

exports.consonantsInAString = consonantsInAString;
