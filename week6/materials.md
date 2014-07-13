# HTML 5 API - WebSockets, Canvas and more

We are going to write more JavaScript applications that use the Canvas and WebSockets technology.

We are goint to introduce WebSockets as a tool to make real-time apps, using JavaScript

## WebSockets

Coming from the HTML 5 JavaScript API, WebSockets gives us the power for making bi-directional communication between the client and the server, __without having the restrictions of HTTP that is - the client has to make a request in order for the server to respond.__

Using WebSockets, the client can push information to the server and the server can push information to the client at any given time.

* A good starting material for WebSockets is this - http://www.html5rocks.com/en/tutorials/websockets/basics/
* MDN Reference for WebSockets has useful information too - https://developer.mozilla.org/en-US/docs/WebSockets
* This 2 minute video from Ericsson Labs shows example usage of WebSockets - https://www.youtube.com/watch?v=Z897fkPn7Rw
* To work with WebSockets, we are going to use the [`Socket.IO`](http://socket.io/) library
