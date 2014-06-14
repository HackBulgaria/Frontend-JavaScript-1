# The Timer of Destiny!

You are going to implement a HTML timer using JavaScript ;)

Run `bower install` and open `index.html`

You will see a timer and few controls on the page. Your job is to write some JavaScript to make the timer running.

Here are the required features:

* The user can select how many minutes and how many seconds the timer should count from the two controls, labeled with `minutes` and `seconds`
* If the user clicks on the `Start Counting Up!` button, the timer should start form `00 : 00` up to the selected minutes and seconds
* If the user clicks on the `Start Counting Down!`, the timer should start from the selected minutes and seconds and count down to `00 : 00`
* If the timer is counting and the user clicks on the `Stop and Reset!` button, the timer should get back to `00 : 00` and the counting should stop.

That's all!

## Few tips for help

The thing you are going to need is the `setInterval` function - https://developer.mozilla.org/en/docs/Web/API/window.setInterval

`setInterval(callback, timeout)` invokes the `callback` every `timeout` milliseconds!

It is important to notice that the function returns an `interalID` with which, you can stop the function from repeating. To do so, you can use `clearInterval` and pass the `intervalID` - https://developer.mozilla.org/en-US/docs/Web/API/window.clearInterval
