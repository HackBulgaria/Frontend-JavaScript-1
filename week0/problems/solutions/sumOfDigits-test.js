/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
*/

"use strict";

var sum_of_digits = require("./sumOfDigits").sumOfDigits;

exports.testThrow = function(test){
    test.throws = function(){
        sum_of_digits(5.3);
    };
    test.done();
};

exports.testThrow = function(test){
    test.throws = function(){
        sum_of_digits(-9);
    };
    test.done();
};


exports.testOne = function(test){
    test.equal(43,sum_of_digits(1325132435356));
    test.done();
};

exports.testTwo = function(test){
    test.equal(1,sum_of_digits(-10));
    test.done();
};

exports.testThree = function(test){
    test.equal(6,sum_of_digits(123));
    test.done();
};
exports.testFour = function(test){
    test.equal(6,sum_of_digits(6));
    test.done();
};
