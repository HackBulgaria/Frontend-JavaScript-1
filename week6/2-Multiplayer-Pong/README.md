# Multiplayer Pong

If you need a reminder about what precisely Pong is, [wikipedia can help][pong-wiki]

## The Server
For simplicity we're reusing the server from [snake's multiplayer][snake-multi]

## The Client
### 1. Implement a single-player pong
* You should be able to move your paddle top-to-bottom and hit the ball. 
* The ball must start at the center and move in a random direction at first. It should be moving with a constant speed and upon hitting a wall or a paddle it should reflect its trajectory. 
* Your enemy can be static for now. 
* The game should end whenever someone successfully scores 5 goals. Implement winning conditions and visualize the score and victory (i.e. `alert("OMG, YOU WIN")`).

### 2. Implement the online component.
* `prompt` players for their name after the game has loaded. 
* Create a `Host Game / Join Game` pair of buttons to let players connect to each other. 
* When both players connect successfully to the game, it should start after 5 seconds. Visualize the countdown. 
* After the 5 seconds have passed, launch the ball from the center with a random direction and allow both players to move their paddles.

### 3. Finishing touches
* Instead of moving the ball with a constant speed use an accelerated motion. Simple school physics and [this link][acceleration-wiki] should get you started. For a start, use constant acceleration.
* Let the player choose whether he wants to play single or multi-player
* Add several behaviours for the AI in the single-player version such a static enemy, one that follows the ball, one that moves in a random direction.
* Add settings to the game that allow the players to change their name, the color of the paddle, the AI behaviour, the speed / acceleration of the ball, the number of goals needed for victory. When in multiplayer, choose randomly from the settings of either player.

[acceleration-wiki]: http://bg.wikipedia.org/wiki/%D0%A3%D1%81%D0%BA%D0%BE%D1%80%D0%B5%D0%BD%D0%B8%D0%B5#.D0.9F.D1.80.D0.B0.D0.B2.D0.BE.D0.BB.D0.B8.D0.BD.D0.B5.D0.B9.D0.BD.D0.BE_.D0.B4.D0.B2.D0.B8.D0.B6.D0.B5.D0.BD.D0.B8.D0.B5
[pong-wiki]: http://en.wikipedia.org/wiki/Pong
[snake-multi]: ../1-Multiplayer-Snake/README.md
