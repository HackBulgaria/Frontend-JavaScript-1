# Problems for week3

## Fun with templates.

We are going to start with a simple template;

Using [`_.template`](http://lodash.com/docs#template), implement the methods in the following object:

```javascript
var htmlGenerator = {
    link : function(data) { ... },
    paragraph: function(data) { ... },
    list: function(data) { ... },
    tag: function(data) { ... }
};
```

Example usage of the functions:

__paragraph__ should return a new paragraph with the given `label`:

```javascript
var p = htmlGenerator.paragraph({
    label: "Hack Bulgaria"
});
```

`p` will hold `<p>Hack Bulgaria</p>`

__link__ should return a new `<a href="link" title="title">text</a>` tag.

```javascript
var link = htmlGenerator.link({
    href: "https://hackbulgaria.com",
    title: "Hack Bulgaria",
    label: "Курсове по Програмиране!"
});
```

`link` contains - `<a href="https://hackbulgaria.com" title="Hack Bulgaria">Курспове по Програмиране!</a>`

__list__ should return a new `ol` or `ul` based on the given `data`:

```javascript
var list = htmlGenerator.list({
    type: "ul",
    children: [{
        label: "Item 1"
    }, {
        label: "Item 2"
    }]
})
```

`list` will hold the following html:

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```

The last one, __tag__ is a more general function, the creates an entire tag with different attributes:

```javascript
var element = htmlGenerator.tag({
    tagName: "div",
    data: htmlGenerator.tag({
        tagName: "h1",
        data: "Hello!"
    }),
    attributes: [{
        key: "class",
        value: "container"
    }, {
        key: "id",
        value: "main-container"
    }]
});
```

`element` will hold the following HTML:

```html
<div class="container" id="main-container">
    <h1>Hello!</h1>
</div>
```

## A simple gallery with lodash

Using the `lodash` library, implement a simple web page, that takes a list of groceries (You can just copy-paste the list into your website):

```javascript
var groceries = [{
    type: "fruit",
    name: "banana",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/166px-Banana-Single.jpg"
}, {
    type: "fruit",
    name: "apple",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/160px-Red_Apple.jpg"
}, {
    type: "fruit",
    name: "grape",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/217px-Table_grapes_on_white.jpg"
}, {
    type: "fruit",
    name: "watermelon",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg/96px-Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg"
}, {
    type: "vegetable",
    name: "potato",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/220px-Patates.jpg"
}, {
    type: "vegetable",
    name: "carrot",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/13-08-31-wien-redaktionstreffen-EuT-by-Bi-frie-037.jpg/218px-13-08-31-wien-redaktionstreffen-EuT-by-Bi-frie-037.jpg"
}, {
    type: "vegetable",
    name: "turnip",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Turnip_2622027.jpg/218px-Turnip_2622027.jpg"
}, {
    type: "vegetable",
    name: "lettuce",
    image: "http://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Iceberg_lettuce_in_SB.jpg/320px-Iceberg_lettuce_in_SB.jpg"
}]
```

And display them, grouped by their `type` with the `image` displayed!

How are you going to layout it - it's up to you! Be sure to have a visual distinction for the different `types`


## A web application to group people in teams

Starting with the next exercise, we are going to work in teams!

Of course, splitting 20-30 people into teams is a headache to do it on a paper by hand.

This is the reason we are going to implement a web application that is going to do the job for us!

And also, we are going to use the implemented application in production, so code well!

### The data

Since we are going to use this in production, we are going to have some real data from Hack Bulgaria's database.

A list of all students, enrolled in all courses can be found here: https://hackbulgaria.com/api/students/

Lets examine one student:

```json
{
    "available": false,
    "courses": [
      {
        "group": 1,
        "name": "Frontend JavaScript"
      }
    ],
    "github": "http://hackbulgaria.com/",
    "name": "Боян Дончев"
}
```

* `available` means that the student is present right now in the room
* `courses` is a list of courses that the student is enrolled in. There are students enrolled in more than one course
  * `group` is the early or late group. `1` is early, `2` is late.
* `github` is the GitHub account of the student. Can be an empty string - `""`
* `name` is the name of the student

### Requirements for the UI

We are going to work with the data from above.

There are few requirements for the UI that we are going to provide. __The general look and decisions for where to place where is up to you!__

#### Filtering

The application should be able to filter the students for a given course of a given group!

__For example, we should be able to say - "Display only the students from JavaScript for the early group"__

When we are grouping into teams, we are going to consider only the filtered students that are marked as available!

#### Displaying students

When the program loads, we should be able to display all students in a grid with 4 columns:

* Name
* GitHub
* Course/s - if the student is enrolled in more than one course, concatenate the courses in this column
* Available - this should be a __checkbox__ column. If `available` is true, the box should be checked. Otherwise - not.

Depending on the filtering controls, we should be able to change the data in the grid, according to the filters.

__The students should be sorted by the following criterias:__

* Always display available students first
* After this, sort them by their course
* After this, sort them by their name

#### Marking students as available / not available

When we fetch the data, there is an `available` attribute for each student.

As described in the `Displaying Students` part, if the student comes as available, the value in the column should be a checked checkbox.

The user should have the control, after that, to check more students as available or to mark them as not available (By checking the checkbox)

__In the end, when we group the students, we are going to consider only the available ones!__

#### Grouping the students

There should be a `Group` button, which randomly generates groups from the filtered students.

Next to the button, there should be a `number control`, to select how many students should be in a group. The default is `2`

#### Displaying the groups

The groups should be visually distinguishable, containing the students in them.

You can be creative and randomly generated names for the groups.

After we are done with this, we are going to add functionallity to localy save the groups!
