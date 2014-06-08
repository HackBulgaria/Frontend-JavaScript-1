// solution here
var countSubstrings = function (haystack, needle) {
    if(typeof  haystack !== "string" || typeof needle !== "string"){
        throw new TypeError("Both arguments should be strings!");
    }
    var num = needle.length;
    var count = 0;
    while (haystack.indexOf(needle) >= 0) {
        count += 1;
        haystack = haystack.slice(num + haystack.indexOf(needle));
        if (count > 10) {
            break;
        }
    }

    return count;
};

exports.countSubstrings = countSubstrings;