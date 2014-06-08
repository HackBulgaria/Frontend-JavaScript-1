// solution here
"use strict";
var fib = function(n) {
    if(typeof n !== "number" || n%1 !== 0 || n < 1){
        throw new TypeError("The argument should be integer number");
    }
    if(n === 1){
        return 1;
    }else if( n === 2){
        return 1;
    }
    else{
        return (fib(n-2) + fib(n-1) );
    }
};


exports.fib = fib;