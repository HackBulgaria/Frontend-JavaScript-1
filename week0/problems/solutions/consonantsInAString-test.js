"use strict"

var consonantsInAString = require("./consonantsInAString.js").consonantsInAString;

exports.testsconsonantsInAStringThrow = function(test){
    test.throws = function(){
        consonantsInAString(5);
    }
    test.done();
}

exports.testTwo = function(test){
    test.equal(7,consonantsInAString("Javascript"));
    test.done();
}

exports.testThree = function(test){
    test.equal(0,consonantsInAString("aaeeoo"));
    test.done();
}