// solution here
"use strict";

var forEach = function(f,arr){
    if(!Array.isArray(arr)){
        throw new TypeError('Invalid parameter');
    }
    var i = 0;
    var n = arr.length;
    for(i; i< n; i++){
        return f(arr[i], i, arr);
    }
};

