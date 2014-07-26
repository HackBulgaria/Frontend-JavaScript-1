"use strict";
var prompt = require("sync-prompt").prompt;

function printBoard(board) {
  var
    i = 0,
    n = board.length;
  // keep in mind that this is poorly-written JavaScript code
  // we will learn not to use for loops in JavaScript
  for(i; i < n; i++) {
    console.log(board[i].join(""));
  }
}

// entry point for the game
function gameLoop() {
  var
    board = [ ["*", "*", "*"],
              ["*", "*", "*"],
              ["*", "*", "*"] ],
    xTurn = true,
    position = null;
  while(true) {

    console.log("This is the current state of the board:");
    printBoard(board);

    if(xTurn) {
      console.log("Place for x");
    } else {
      console.log("Place for y");
    }

    // this is blocking prompt
    position = prompt("x y>");
    console.log(position);
    xTurn = !xTurn;
  }
}

gameLoop();
