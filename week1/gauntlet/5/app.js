$(document).ready(function() {
  'use strict';

  var randomNumHolder = $('#container').find('h1').find('span'),
      guessedNumHolder = $('#container').find('h2').find('span');

  randomNumHolder.text(getRandomInt(100, 1000000000));

  // get the text from the span where we
  // output all numbers which have been
  // pressed and then we delete the last
  // number
  $('#go-back').on('click', function() {
    var numberSoFar = guessedNumHolder.text(),
        lastNumberRemoved = numberSoFar.substring(0, numberSoFar.length-1);

    guessedNumHolder.text(lastNumberRemoved);
  });

  // when a user clicks on a number
  // we get that number from the text in
  // the button and append it to the
  // end of the text that is in the
  // span where we output all numbers
  $('.nums').on('click', function() {
    var numberSoFar = guessedNumHolder.text(),
        newNumber = numberSoFar + $(this).text();

    guessedNumHolder.text(newNumber);
    checkIfPlayerWins();
  });

  // compares the random generated number
  // and the number the user has enetered
  // so far
  function checkIfPlayerWins() {
    if (randomNumHolder.text() === guessedNumHolder.text()) {
      var newGame = confirm('You guessed the number! '+
                            'Do you want to continue?');

      if (newGame) {
        guessedNumHolder.empty();
        randomNumHolder.text(getRandomInt(100, 1000000000));
      }

    }
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


});
