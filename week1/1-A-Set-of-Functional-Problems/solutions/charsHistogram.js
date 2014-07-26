var charsHistogram = function(str) {
  var allCharacters = str.split("").map(function(ch) {
    return ch.toLowerCase();
  }).filter(function(ch) { 
    return ch.trim() !== ""
  });
  var result = {};

  allCharacters.forEach(function(ch) {
    result[ch] = result[ch] + 1 || 1;
  });

  return result;
};

var str = "Count the characters in this very profound sentence";
console.log(charsHistogram(str));
