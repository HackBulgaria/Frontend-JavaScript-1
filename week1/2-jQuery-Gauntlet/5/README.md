# Enter the number

Open `index.html` and you will see a simple game:

* There is a random number, generated at the top of the page.
* There is a row of controls - buttons from 0 to 9 and a step-back button.
* There is a field, which is populated with the numbers of the clicked buttons.

__Your job is to implement the game!__

First of all, populate the random-generated number with a real random number (It is hardcoded in the HTML right now).

The objective of the game is for the user to enter the number by clicking on the single-digit buttons.

For example, if the number is `123123`, the user will have to click the buttons `1` -> `2` -> `3` -> `1` -> `2` -> `3`

* If the user enters the entire number correctly, alert a message that he has succeeded and generate a new number
* The user can use the `<--` button to delete misclicked numbers
* All the numbers that the users clicks, should be populated in the field below the buttons.
