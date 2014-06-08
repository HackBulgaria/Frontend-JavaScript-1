"use strict"

var countSubstrings = require("./countSubstrings").countSubstrings;

exports.countSubstringsThrow1 = function(test){
    test.throws = function(){
        countSubstrings(5);
    }
    test.done();
}

exports.countSubstringsThrow2 = function(test){
    test.throws = function(){
        countSubstrings(5, 5);
    }
    test.done();
}


exports.countSubstrings1 = function(test){
    test.equal(2, countSubstrings("This is this and that is this", "this"));
    test.done();
}

exports.countSubstrings2 = function(test){
    test.equal(0, countSubstrings("This is this and that is this", "bird"));
    test.done();
}