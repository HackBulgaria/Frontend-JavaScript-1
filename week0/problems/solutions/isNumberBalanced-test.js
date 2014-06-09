/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
*/

"use strict";

var isNumberBalanced = require("./isNUmberBalanced").isNumberBalanced;

exports.testIsNumberBalancedThrow = function(test){
    test.throws = function(){
        isNumberBalanced("sdgfs");
    }
    test.done();
};

exports.testIsNumberBalancedThrow1 = function(test){
    test.throws = function(){
        isNumberBalanced([1,2,1]);
    }
    test.done();
};

exports.testIsNumberBalancedThrow2 = function(test){
    test.throws = function(){
        isNumberBalanced(5.3);
    }
    test.done();
};


exports.testIsNumberBalancedTrue = function(test){
    test.equal(true,isNumberBalanced(4251));
    test.done();
};

exports.testIsNumberBalancedTrue1 = function(test){
    test.equal(true,isNumberBalanced(42351));
    test.done();
};

exports.testIsNumberBalancedTrue2 = function(test){
    test.equal(true,isNumberBalanced(-4251));
    test.done();
};

exports.testIsNumberBalancedfalse = function(test){
    test.equal(false,isNumberBalanced(1234));
    test.done();
};

