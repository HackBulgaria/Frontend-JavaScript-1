# Variable Names

You are presented with a NodeJS `server` that serves two HTTP urls:

## GET `/names`

Returns a JSON list of names. Each name is of the following type:

```javascript
{
    name: "...",
    nameId: 1
}
```

`nameId` is unique for every name.

## POST `/name`

The payload for this post is in JSON format:

```javascript
{
    name: "...",
    nameId: 1
}
```

This updates the given `nameId` with the new `name`.

## Your job.

You have to make a small web app that lists all names from the server by putting them into text inputs, next to a "Save" button.

The UI should look something like this:

![UI Mockup](https://raw.githubusercontent.com/HackBulgaria/Frontend-JavaScript-1/master/exams/exam2/2-Variable-Names/mockup.png)

__The requirements are:__

* Load all names from the server and display them as text inputs with "Update Name" button next to them. __The button should be disabled at first.__
* Once the name is changed, enable the button next to the changed name.
* When the button is clicked, send a POST to `/name` on the server with the required payload. After you have received the response, reload all names.
