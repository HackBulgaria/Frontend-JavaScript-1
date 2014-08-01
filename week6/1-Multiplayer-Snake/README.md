# Multiplayer Snake

We are going to extend our snake and make it multiplayer!

By multiplayer, we mean two players playing from two different browsers and competing (or collaborating) to get the food.

__Quick facts:__

* We are going to use [WebSockets and socket.io](https://github.com/HackBulgaria/Frontend-JavaScript-1/blob/master/week6/materials.md) for the purpose.
* We are going to work in teams

## The server

We are going to use the [Simple-WebSocket-Server](https://github.com/HackBulgaria/Simple-WebSocket-Server)

Read the description there to have a good understanding of what requests you have to make!

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
