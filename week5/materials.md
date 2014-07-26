# HTML5 cheatcsheet

## DOCTYPE declaration

The <!DOCTYPE> declaration helps the browser to display a web page correctly.

There are many different documents on the web, and a browser can only display an HTML page 100% correctly if it knows the HTML version and type used.

We use HTML5 so your document starts with:

HTML5
```
<!DOCTYPE html>
```

HTML4.01

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

## HTML Comments

```
<!-- Write your comments here -->
```

## Links

The HTML code for a link is simple. It looks like this:

```
<a href="https://hackbulgaria.com/">Hack Bulgaria</a>
```

The target attribute specifies where to open the linked document.

The example below will open the linked document in a new browser window or a new tab:

```
<a href="https://hackbulgaria.com/" target="_blank">Hack Bulgaria</a>
```

## Meta tags

Metadata is data (information) about data.

The <meta> tag provides metadata about the HTML document. Metadata will not be displayed on the page, but will be machine parsable.

Define keywords for search engines:
`NOTE:` This tags is not used any more by google, according to the latest news!
```
<meta name="keywords" content="HackBulgaria, Education, Classroom">
```

Define a description of your web page:
```
<meta name="description" content="HackBulgaria - free programming courses">
```

Define the author of a page:
```
<meta name="author" content="Ivaylo Bachvarov">
```


## HTML Blocks

HTML elements can be grouped together with <div> and <span>.

### HTML Block Elements
Block level elements normally start (and end) with a new line when displayed in a browser.

Examples:
```
<div>, <h1>, <p>, <ul>, <table>
```

### HTML Inline Elements
Inline elements are normally displayed without starting a new line.

Examples:
```
<b>, <td>, <a>, <img>, <span>
```

## Forms are fat:

HTML forms are used to pass data to a server.

Example:
```
<form>
First name: <input type="text" name="firstname"><br>
Last name: <input type="text" name="lastname">
</form>
```

We have a different types of data, so we have a diferent types of input fields.

For passwords:
```
<input type="password">
```

Radio buttons let a user select ONLY ONE of a limited number of choices:
```
    <input type="radio" name="sex" value="male">Male
    <input type="radio" name="sex" value="female">Female
```

Dropdown menus does the same work:
```
<select>
  <option value="JavaScript">JavaScript</option>
  <option value="Java">Java</option>
  <option value="C#">C#</option>
  <option value="C++">C++</option>
</select>

```
Checkboxes let a user select ZERO or MORE options of a limited number of choices.
```
<input type="checkbox" name="course" value="java">Java<br>
<input type="checkbox" name="course" value="javascirpt">JavaScript
```

Multuple choice menu does the same!
```
<select name="state[]" size="7" multiple>
    <option value="Alabama">Alabama</option>
    <option value="Arkansas">Arkansas</option>
    <option value="Colorado">Colorado</option>
    <option value="Kentucky">Kentucky</option>
    <option value="Tennessee">Tennessee</option>
    <option value="Washington">Washington</option>
</select>
```

We have textareas for bigger texts:
```
<textare name="big-text"></textarea>
```

You can choose a color with color field:
```
<input type="color" name="favcolor">
```

You can select a date with date field:
```
<input type="date" name="bday">
```
Email, URL, Time, Tel, Number fields are nice too:


There is a nice slider for a range input
```
<input type="range" value="50">
```

### Labels in forms

The <label> tag defines a label for an <input> element.

The <label> element does not render as anything special for the user. However, it provides a usability improvement for mouse users, because if the user clicks on the text within the <label> element, it toggles the control.

The for attribute of the <label> tag should be equal to the id attribute of the related element to bind them together.

```
<form action="demo_form.asp">
  <label for="male">Male</label>
  <input type="radio" name="sex" id="male" value="male"><br>
  <label for="female">Female</label>
  <input type="radio" name="sex" id="female" value="female"><br><br>
  <input type="submit" value="Submit">
</form>
```
## HTML5 Video and Audio Player is here!

To show a video in HTML5, this is all you need:

```
<video width="320" height="240" controls>
  <source src="movie1.mp4" type="video/mp4">
  <source src="movie2.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
```

For audio you need:
```
<audio controls>
  <source src="dance.ogg" type="audio/ogg">
  <source src="kucheck.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
```

## HTML5 Geolocation

The HTML5 Geolocation API is used to get the geographical position of a user.

Since this can compromise user privacy, the position is not available unless the user approves it.

```
<script>
var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}
</script>
```

## HTML5 Drag and Drop
Drag and drop is  NOW A PART of the HTML5 standard.

For a good example of drag and drop code look here: http://www.w3schools.com/html/html5_draganddrop.asp

## Local storage

With HTML5, web pages can store data locally within the user's browser.

Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.

The localStorage object stores the data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.


```
localStorage.setItem("hacker_name", "Dinko");
localStorage.getItem("hacker_name");
```

## DO NOT DO THIS!

1. Inline styles
No, no, no! Just don't!

```
<div style="padding: 20px;"></div>
```

2. Duplication ids

id's must be unique! If you have to duplicate them just use classes
```
<div id="small-text"></div>
...
<p id="small-text"></p>
```
