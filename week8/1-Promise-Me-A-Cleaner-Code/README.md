# Refactoring the Pyramid of Doom

In `app.js`, there is a pyramid of doom.

Two async functions that need to be executed one after another.

When `first()` finishes, we should call `second()`, and when `second()` finishes we should call `third()`

Very quickly, we are going into [callback-hell](http://callbackhell.com/) land!

Use the required `Q` library and refactor the code so it uses promises!

You may want to use `Q.defer()` for that - https://github.com/kriskowal/q#the-beginning
