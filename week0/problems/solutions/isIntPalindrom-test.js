"use strict"

var isIntPalindrom = require("./isIntPalindrom").isIntPalindrom;

exports.testIsIntPalindromThrow = function(test){
    test.throws = function(){
        isIntPalindrom("sdfgvds");
    }
    test.done();
};

exports.testIsIntPalindromThrow2 = function(test){
    test.throws = function(){
        isIntPalindrom([1,2,3]);
    }
    test.done();
};

exports.testIsIntPalindromTrue = function(test){
    test.equal(true,isIntPalindrom(6));
    test.done();
};

exports.testIsIntPalindromTrue1 = function(test){
    test.equal(true,isIntPalindrom(31213));
    test.done();
};

exports.testIsIntPalindromTrue2 = function(test){
    test.equal(true,isIntPalindrom(312213));
    test.done();
};

exports.testIsIntPalindromTrue3 = function(test){
    test.equal(false,isIntPalindrom(315613));
    test.done();
};