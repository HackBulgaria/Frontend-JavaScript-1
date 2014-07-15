var
  _ = require("lodash"),
  app = require('express')(),
  http = require('http').Server(app),
  io = require('socket.io')(http),
  bodyParser = require("body-parser");

var gameData = {}; // socketId (host) -> gameId
var gameIdToPlayers = {}; // gameId -> [host, player2]
var connectedClients = {}; // socketId -> socket

function emitTo(sockets, message, data) {
  sockets.forEach(function(socket) {
    if(typeof socket === "string") {
      socket = connectedClients[socket];
    }
    socket.emit(message, data);
  });
}

function socketConnected(socket) {
  console.log("Socket with id: " + socket.id + " connected");
  connectedClients[socket.id] = socket;
}

function socketDisconected(socketId) {
  // remove client from the socketId

  if(connectedClients[socketId]) {
    delete connectedClients[socketId];
  }

  if(gameData[socketId]) {
    var gameId = gameData[socketId].gameId;
    // notify other player
    delete gameData[socketId];
    delete gameIdToPlayers[gameId];
  }
}

// "{playerName}-{5 letters from socketId} - {random number between 1 and 1000}"
function createGameId(playerName, socketId) {
  return [playerName.toString(), socketId.substring(0, 5), _.random(1, 1000).toString()].join("-");
}

io.on('connection', function(socket){
  socketConnected(socket);

  socket.on("move", function(data) {
    var gameId = data.gameId;
    if(gameIdToPlayers[gameId]) {
      emitTo(_.pluck(gameIdToPlayers[gameId], "socketId"), "render", data);
    }
  });

  socket.on("disconnect", function() {
    socketDisconected(this.id);
  });
});

// HTTP PART DOWN THERE

app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", ["X-Requested-With", "Content-Type", "Access-Control-Allow-Methods"]);
  res.header("Access-Control-Allow-Methods", ["DELETE"]);
  next();
});

app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("HELLO!");
});

app.post("/createGame", function(req, res) {
  var
    playerName = req.body.playerName,
    socketId = req.body.socketId,
    gameId = null;

    // already hosted a game
    if(gameData[socketId]) {
      gameId = gameData[socketId];
    } else {
      // host new game
      gameId = createGameId(playerName, socketId);

      gameData[socketId] = gameId; // we are using it as a set

      gameIdToPlayers[gameId] = [{
        playerName: playerName,
        socketId: socketId,
        isHost: true
      }];
    }

    res.json({
      gameId: gameId
    });
});

app.post("/joinGame", function(req, res) {
  var
    playerName = req.body.playerName,
    socketId = req.body.socketId,
    gameId = req.body.gameId,
    host = null;


    if(gameIdToPlayers[gameId]) {
      // this game is hosted
      host = gameIdToPlayers[gameId][0];

      // add second player to the game
      gameIdToPlayers[gameId].push({
        playerName: playerName,
        socketId: socketId,
        isHost: false
      });

      console.log(_.pluck(gameIdToPlayers[gameId], "socketId"));

      emitTo(_.pluck(gameIdToPlayers[gameId], "socketId"), "start", {
        player1: host.playerName,
        player2: playerName
      });
      res.json({
        status: "SUCCESS"
      });
    } else {
      res.json({
        "error": "This game is not hosted"
      });
    }

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
