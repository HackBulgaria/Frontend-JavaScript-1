# Multiuser Paint
 
There are many [collaborative drawing tools](http://www.webdistortion.com/2011/01/22/best-online-collaborative-drawing-tools/) and today you&#39;ll create one more. In short, these applications allow multiple people to draw on the same canvas simultaneously.
 
## The Server
For simplicity we're reusing the server from [snake's multiplayer][snake-multi]

## The Client
### 1. Lone drawing
 
Start off by creating the barebones of your tool. Create a canvas you can paint black curves on by dragging the mouse. The easiest way to do that is to draw small circles whenever the mouse is pressed and moving i.e.:
 
```javascript
function onMouseMove(){
    if (isLeftMouseButtonDown()) {
        var coords = getMouseCoordinates();
        drawSmallCircleAround(context, coords);
    }
}
```
 
This approach will save you some headaches.
 
### 2. Settings time!
 
What good is a sketching application if you can only draw black curves? 
* Add options to switch the current tool with various other tools such as drawing:
 - a straight line between two points
 - a rectangle between 4 points
 - a circle around a point with a given radius. 
 - an eraser that... well, erases stuff (you can implement that as drawing a transparent black)
* Add a color palette to choose the color to draw with.
* Add a slider to select the width of the current brush.
 
### 3. Go online
 
* Allows users to create multi-user sketches with the pair of buttons `Make Sketch Multi-user / Join Multi-user sketch`. 
* When the `Make Sketch Multi-user` is clicked, `prompt` the user for a sketch name and allow other to connect.
* Allow users to see a list of all multi-user sketches and click the elements of the list in order to join the sketch. 
* Whenever someone joins a multi-user sketch, the application must replace the current sketch with the multi-user sketch. From then on, all clients must see the be able to see and edit the sketch in real time.
 
## 4. Finishing touches
* Allow users to save their sketch as an image file.
*   Add an undo / redo buttons and shortcut them to `ctrl-Z, ctrl-Y`.
