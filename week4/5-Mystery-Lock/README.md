# The Mystery Lock with AJAX calls

You are presented with a client-server application with the following structure:

```
5-Mystery-Lock
├── client
│   ├── app.js
│   ├── bower.json
│   ├── index.html
│   └── styles.css
├── README.md
└── server
    ├── package.json
    └── server.js
```

You have to implement the client logic in order to unlock the mystery!

Of course, since this is a JavaScript course, the mystery is going to be unlocked by clicking on buttons and sending AJAX requests :)

## The server

In the `server` folder, there is a express application that serves few GET and POST endpoints:

* `GET /init` is called by the client at the start of the application. This returns a shuffled array of data that is rendered as buttons by the client
* `GET /sercret/:label` is called by the client when a button is clicked. This retuns the secret for the given `:label`. For example, if we want to know the secret for `Odin`, the request will be pointed at `/secret/Odin`
* `POST /unlock` is called by the unlock button. This checks if the given concatenated secrets match the original one. If they do, the myster is unlocked!

__In order to start the server, you have to:__

1. Run `npm install`
2. Run `node server.js`
3. The server will start at `http://localhost:3000`

## The client

Examine the client's `app.js` - we have done some of the code for you.

Your job is to finish the client so it is possible for the user to solve the mystery by clicking the buttons.

If you open `index.html` in a browser, you will see 6 buttons surrounding an `Unlock` button.

Each button has two parts:

1. index - from 0 to 5
2. label - named after stuff from the Nordic mythology

__You have to implement the following requirements:__

* Buttons should be clicked in order, starting from index 0 and reaching index 5
* At any given time, only one button should be enabled for clicking. When the app starts, this is the 0th button
* If a button is clicked, you have to make a call to the server's endpoint: `GET /secret/:label` in order to retrieve the secret key for that button
* When you click a button and receive response from the server, disable that button and enable the next one in the order.
* Keep all keys because you have to concatenate them (From 0th to the 5th) and click the `Unlock` button at the end

Play around with the server to get a graps of what you should do.

__How to run the client:__

1. Run `bower install`
2. Open `index.html` in a browser
