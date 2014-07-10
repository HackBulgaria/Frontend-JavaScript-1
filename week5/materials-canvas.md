# Materials for Canvas

The `<canvas>` element is used to draw graphics, on the fly, on a web page. A canvas is a rectangular area on an HTML page, and it is specified with the `<canvas>` element.

```html
<canvas id="hackCanvas" width="400" height="400"></canvas>
```

We can draw on it with JavaScript!
```javascript
var c = document.getElementById("hackCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(0,0,100,100);
```

Call its `getContext()` method (you must pass the string `"2d"` to the `getContext()` method):

The `getContext("2d")` object is a built-in HTML5 object, with many properties and methods for drawing paths, boxes, circles, text, images, and more.


## Canvas can drow lines

That will make a stroke from 0,0 to 200,100

```javascript
var c = document.getElementById("hackCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();
```

## Canvas can drow text:

`fillText(text,x,y)` - Draws "filled" text on the canvas

```javascript
var c = document.getElementById("hackCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello Hack Bulgaria", 10, 50);
```

## Canvas can drow Images

This can be achieved by - `drawImage(image,x,y)`

```javascript
var c = document.getElementById("hackCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("scream");
ctx.drawImage(img,10,10);
```

## Cheatsheet and Examples

__Here we have a canvas cheat sheet:__

http://cheatsheetworld.com/programming/html5-canvas-cheat-sheet/

You can use it!

__Here we have some canvas examples:__

http://corehtml5canvas.com/code-live/

MUCH IMPRESIVE!
