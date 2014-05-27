"use strict";
var prompt = require("sync-prompt").prompt;

function printBoard(board) {
  var
    i = 0, j = 0,
    n = board.length, m = board[0].length,
    row = "";

  // keep in mind that this is poorly-written JavaScript code
  // we will learn not to use for loops in JavaScript
  for(i; i < n; i++) {
    for(j; j < m; j++) {
      row += board[i][j];
    }
    console.log(row);
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

    var player1Name, player2Name;

    player1Name = prompt("Enter name for player1>");
    player2Name = prompt("Enter name for player2>");

  while(true) {

    console.log("This is the current state of the board:");
    printBoard(board);

    if(xTurn) {
      console.log("Place for " + player1Name);
    } else {
      console.log("Place for " + player2Name);
    }

    // this is blocking prompt
    position = prompt("x y>");
    console.log(position);

    xTurn = !xTurn;
  }
}

gameLoop();
