var
  _ = require("lodash"),
  app = require('express')(),
  http = require('http').Server(app),
  io = require('socket.io')(http),
  bodyParser = require("body-parser"),
  hostToGameId = {}, // socketId (host) -> gameId
  gameIdToPlayers = {}, // gameId -> [host, player2]
  connectedClients = {}; // socketId -> socket

function emitTo(sockets, message, data) {
  sockets.forEach(function(socket) {
    if(typeof socket === "string") {
      socket = connectedClients[socket];
    }
    socket.emit(message, data);
  });
}

function socketConnected(socket) {
  console.log("Socket with id: %s connected", socket.id);
  connectedClients[socket.id] = socket;
}

function socketDisconected(socketId) {
  console.log("Socket with id: %s is disconnecting.", socketId);

  var
    gameId = null,
    hostId = null;

  // remove client from the socketId
  if(connectedClients[socketId]) {
    delete connectedClients[socketId];
  }

  Object.keys(gameIdToPlayers).forEach(function(gid) {
    var
      players = gameIdToPlayers[gid],
      target = null,
      isHost = function(player) {
        return player.isHost;
      }

    // first, find the host so we can delete it's record
    hostId = _.pluck(players.filter(isHost), "socketId").pop();
    console.log("The host is %s", hostId);

    if(_.contains(_.pluck(players, "socketId"), socketId)) {
      console.log("Players found in game %s", gid);
      gameId = gid;
      if(socketId === players[0].socketId) {
        target = players[1];
      } else {
        target = players[0];
      }

      // if we have 2 players
      if(target) {
        emitTo([target.socketId], "game_disconnected", {});
      }
    }
    return false;
  });

  delete gameIdToPlayers[gameId];
  delete hostToGameId[hostId];
}

// "{playerName}-{5 letters from socketId} - {random number between 1 and 1000}"
function createGameId(playerName, socketId) {
  return [playerName.toString(),
          socketId.substring(0, 5),
          _.random(1, 1000).toString()].join("-");
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
    if(hostToGameId[socketId]) {
      gameId = hostToGameId[socketId];
    } else {
      // host new game
      gameId = createGameId(playerName, socketId);

      hostToGameId[socketId] = gameId; // we are using it as a set

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

app.get("/games", function(req, res) {
  res.json(gameIdToPlayers);
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
