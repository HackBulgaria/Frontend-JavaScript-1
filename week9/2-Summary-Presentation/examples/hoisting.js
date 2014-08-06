console.log(a);
var a = 5;

// this is transformed to:

// var a;
// console.log(a);
// a = 5;

// DIFFERENCE BETWEEN
// function a() {}
// and
// var a = function() {}

foo();

function foo() {
  console.log("Foo called");
}

bar();

var bar = function() {
  console.log("Bar called");
}
