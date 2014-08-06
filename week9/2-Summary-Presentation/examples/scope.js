var sum = 0;

for(var i = 0; i < 5; i ++) {
  sum += i;
}

console.log(i);

function iMakeTheScope() {
  var a = 5;
  console.log(a);
}

iMakeTheScope();
console.log(typeof a);
