var zip = function() {
  // this is how variable arguments is passed to the function
  // there is a variable called arguments
  // that is visible in the function
  console.log(arguments);
}

console.log(zip([1,2,3], [4,5,6]));
