/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
*/

var sumInts = function(a, b){
    return parseInt(a) + parseInt(b);
};

var isNumberBalanced = function(n) {
    if(typeof n !== "number" || n%1 !==0){
        throw new TypeError("invalid argument");
    }
    if(parseInt(n/10) === 0){
        return true;
    }
    n = Math.abs(n);
    var digits = n.toString().split("");

    var num = digits.length;
    var firstHalf = digits.slice(0,parseInt(num/2));
    if(num%2 === 0){
        var secondHalf = digits.slice(parseInt(num/2));
    }
    else{
        var secondHalf = digits.slice(parseInt(num/2)+1);
    }

    var firstNum = firstHalf.reduce(sumInts);
    var secondNum = secondHalf.reduce(sumInts);
    return (firstNum === secondNum);
};

exports.isNumberBalanced = isNumberBalanced;