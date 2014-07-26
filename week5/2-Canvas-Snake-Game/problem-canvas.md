#Snake

Yes, just snake. But not a traditional one. It is coning to be a snake with options ;-)

## 1. Implement a traditional snake.
![Snake demo at Hack Bulgaria](snake-demo.png?raw=true)
### 1.a You have to navigate the snake by  pressing the arrow buttons.

Every button  have a key code.
Here are the key codes for the arrows.

```javascript
keyCodeToDirectionTable = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
};
```
NOTE!: Your snake can't turn form left to right. It is a traditional Nokia snake.

### 1.b Make a game loop.
Game loop is a function that is called in every X seconds. In every X time you should clear the canvas and move the snake.

```javascript
setInterval(function() {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    snake.move();
    snake.print();
}, 100);
```

### 1.c Make a food object
As we are doing the game in OOP style. You shoud make an class food with the following methods.

```javascript
food.print();
food.generateNewPosition();
```

Every time the snake eats the food. It changes its position and its colour. Then the snake gets bigger.

### 1.d Images.

You can put images in canvas.

Make a google image search for `repeating grass pattern` and place a grass at the background of the game.

Make your food not just a dot, but an image of a small apple.

## 2. Settings field.

![Snake settings demo at Hack Bulgaria](snake-settings.png?raw=true)

## 3. Top list.

Use the power of `localStorage` to implement that.

After every game you shoud see a ``prompt`` that asks you for your name.

After pressing the `Top Chart` button you shoud see the best 10 players and their scores.
