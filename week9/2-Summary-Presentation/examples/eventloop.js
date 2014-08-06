var 
  start = Date.now(),
  end = 0,
  heavy = 0;

setTimeout(function() {
  end = Date.now();
  console.log("Executed for %d milliseconds", end - start);
}, 1000);

while(heavy < 10000000000) {
  heavy += 1;  
}
