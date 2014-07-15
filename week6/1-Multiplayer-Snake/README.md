# Multiplayer Snake

We are going to extend our snake and make it multiplayer!

By multiplayer, we mean two players playing from two different browsers and competing to get the food.

__Quick facts:__

* We are going to use [WebSockets and socket.io](https://github.com/HackBulgaria/Frontend-JavaScript-1/blob/master/week6/materials.md) for the purpose.
* We are going to work in teams

## The server

This one is more complicated.

In the `server` folder, there is a `server.js` that serves both as a HTTP and Socket server.

You have to run `npm install` and `node server.js` to run it.

### HTTP API

The serves exposes two HTTP methods:

#### POST `/createGame`

__The request payload should be in JSON:__

```javascript
{
    "playerName": "RadoRado",
    "socketId": "the_socket_id_here"
}
```

The server responds with JSON with the `gameId`. This id is important!

__Response:__

```javascript
{
    "gameId" : "the_game_id_here"
}
```

#### POST `/joinGame`

Once there is a hosted game, the other player can join it.

The player that joins the game should provide the `gameId`!

The request payload is:

```javascript
{
    "playerName": "RadoRado",
    "socketId": "the_socket_id_here",
    "gameId": "the_game_id_here"
}
```

Once a player joins a hosted game, __socket event__ `"start"` is emitted to both players.


### Socket Events

The server emits the following socket events:

#### start event

Once there is a hosted game and a player joins it, a `start` event is emiited with the following payload:

```javascript
{
    "player1": "Player1 name here",
    "player2": "Player 2 name here"
}
```

#### render event

THe server emits a `render` event with the data, that pass passed from one of the clients with the `move` event.

`render` is simply an echo to the players in the given game with the data from `move`

__The server accepts the following events (Emited by the client):__

#### move

The clients emits a `move` event.

The data is not specified and it is up to you to decide what kind of data you should transmit to the server.

The idea behind the `move` event is to send the server your coordinates in order to update the game for the other player.


When a `move` event is fired, both clients receive `render` from the server with the data, that was passed to the `move` event.

You have to decide the format of the data.

## Game Design

This should be your choice.

### Competative mode

You can make the game competative - the two players compete against each other for food.

There is a starvation timer - if a snake does not eat food for a given time - it dies.

When both snakes collide, nothing happens.

### Collaborative mode

You can make the game collaborative - there are multiple foods and a timer and the two players have to gather all the food before the time runs out.

It is your call how to make the game. Be creative!

## Big Canvas

Oh, and one last thing. Make the canvas really big, because there are going to be 2 snakes there!
