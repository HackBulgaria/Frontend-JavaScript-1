/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var format = require('./stringFormat').stringFormat;

exports.testFormat = function (test) {
    test.equals('JavaScript is a very weird language!',
        format('{lang} is a very weird {thing}!', {
            'lang' : 'JavaScript',
            'thing' : 'language'
        }));
    test.done();
};
