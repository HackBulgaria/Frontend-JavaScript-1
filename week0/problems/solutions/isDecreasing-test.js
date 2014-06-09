 /*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

"use strict"

var isDecreasing = require("./isDecreasing").isDecreasing;

exports.testIsDecreasingThrow = function(test){
    test.throws = function(){
        isDecreasing("sdfdgd");
    }
    test.done();
}

exports.testIsDecreasingEmpty = function(test){
    test.equal(true, isDecreasing([]));
    test.done();
};

exports.testIsDecreasingArray = function(test){
    test.equal(true, isDecreasing([5,4,2,1]));
    test.done();
};

exports.testIsDecreasingFalse = function(test){
    test.equal(false, isDecreasing([5,4,2,1,8]));
    test.done();
};