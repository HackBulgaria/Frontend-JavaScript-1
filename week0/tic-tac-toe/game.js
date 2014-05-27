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
    position = prompt("x y>").split(" ");
    console.log(position);
    var x = parseInt(position[0], 10);
    var y = parseInt(position[1], 10);

    var row = board[x-1];
    row[y-1] = "X";
    console.log(row);
    board[x-1] = row;

    xTurn = !xTurn;
  }
}

gameLoop();
