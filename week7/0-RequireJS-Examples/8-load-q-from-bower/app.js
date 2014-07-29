require.config({
  paths: {
    "Q": "bower_components/q/q"
  }
});

require(["Q"], function(Q) {

  function first() {
    // defered object
    var defer = Q.defer();

    setTimeout(function() {
      defer.resolve(42);
    }, 1000);

    return defer.promise;
  }

  function delayedSquare(n) {
    var defer = Q.defer();

    if(n < 0) {
      defer.reject("Too negative man!");
    }

    setTimeout(function() {
      defer.resolve(n * n);
    }, 1000);

    return defer.promise;
  }

  Q.fcall(first)
   .then(delayedSquare)
   .then(console.log.bind(console))
   .catch(function(error) {
      console.log(error);
    })
   .done();

});











