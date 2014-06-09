// solution here
var isIntPalindrom = function(n) {
    if(typeof n !== "number" || n%1 !==0){
        throw new TypeError("The input should be integer.");
    }
    var  numArray = n.toString().split("");
    if(numArray[0] === "-"){
        numArray.shift();
    }
    var dcount = numArray.length;
    var del1 = parseInt(dcount/2);
    var del2;
    if(dcount % 2 === 0){
        del2 = del1;
    }else{
        del2 = del1 +1;
    }
    var firstHalf = numArray.slice(0,del1 );
    var secondHalf = numArray.slice(del2).reverse();


    return firstHalf.sort().toString() === secondHalf.sort().toString();
};

exports.isIntPalindrom = isIntPalindrom;
