 /*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */
 
var map = function(f, arr) {
    if(!Array.isArray(arr)) {
        throw new TypeError("The second argument should be array!");
    }
    var result = [];
    arr.forEach (function( a,i) {
        result.push(f(a, i));
    });
    return result;
};

var filter = function(pred,arr) {
    if(!Array.isArray(arr)) {
        throw new TypeError("The second argument should be array!");
    }

    var result = [];
    arr.forEach(function(a) {
        if(pred(a)) {
            result.push(a);
        }
    });
    return result;
};

var reduce = function(f,arr, first) {

    if(!Array.isArray(arr) || arr.length < 1) {
        throw new TypeError("The second argument should be not empty array!");
    }
    if(typeof first != 'undefined') {
        accumulate = first;
    }
    else {
        var accumulate = arr.shift();
    }
    arr.forEach(function(a) {
        accumulate = f(accumulate, a);
    });

    return accumulate;
};

var any  = function(f, arr) {
    if(!Array.isArray(arr)) {
        throw new TypeError("The second argument should be array!");
    }
    var i = 0;
    var n = arr.length;
    for(i; i< n; i++) {
        if(f(arr[i])) {
            return true;
        }
    }

    return false;
};

var all  = function(f, arr) {
    if(!Array.isArray(arr)) {
        throw new TypeError("The second argument should be string!");
    }
    var i = 0;
    var n = arr.length;
    for(i; i< n; i++) {
        if(!f(arr[i])) {
            return false;
        }
    }

    return true;
};

exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
exports.any = any;
exports.all = all;
