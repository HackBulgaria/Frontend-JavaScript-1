// solution here
"use strict";

var allCosonants = "bcdfghjklmnpqrstvwxz";

var consonantsInAString = function(str){

    if(typeof str !== "string"){
        throw new TypeError("The input should be string!");
    }
    var letters = str.toLowerCase().split("");
    var result = 0;

    letters.forEach(function(a){
        if(allCosonants.indexOf(a) >= 0){
            result += 1;
        }
    });
    return result;
};

exports.consonantsInAString = consonantsInAString;