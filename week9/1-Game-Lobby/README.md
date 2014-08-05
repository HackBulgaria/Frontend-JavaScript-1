# A reusable Game Lobby

We are going to implement a game lobby that will interface our [multiplayer games from week7](https://github.com/HackBulgaria/Frontend-JavaScript-1/tree/master/week6).

We are going to use the following dependencies:

* RequireJS to load AMD modules
* BackboneJS which requires jQuery and UnderscoreJS
* Handlebars for templates (http://stackoverflow.com/questions/9072324/using-handlebars-with-backbone)
* socket.io client for getting the `socketId`

The Game Lobby will consist the following separated views:

## A field for setting username

This one is simple - we are going to need an input to hold the username, and a button to save the username.

The view should update a `User` model accordingly.

## A button for hosting a game

When the button is clicked, the user should create a game, sending his `username` and his `socketId`

The returned `gameId` should be populated in a `Game` model.

## Waiting for other player view

This view should be displayed when a user hosts a game.

## A table for the already hosted games with a join button for them

If we are going to join a game, we should be able to see a table with the currently hosted games.

Use the `GET /games2` from `http://hackbulgaria:3000` which returns a list of currently hosted games.

Filter the games that have 2 players! We only need to show the hosted and not started.
