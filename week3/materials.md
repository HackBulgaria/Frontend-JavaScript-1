# Materials for week3

## The Exam from week2

In order to feel comfortable in week3, you have to pass [the exam from week2.](https://github.com/HackBulgaria/Frontend-JavaScript-1/tree/master/week2/exam)

## A Standard library for JavaScript

We are going to use [`lodash`](http://lodash.com/) as a standard library from now on!

Bookmark the documentation since we are going to use it a lot!

## Templates with lodash

From now on, we are going to use different template engines to create HTML from our JavaScript.

This means that we are going to stop concatenating HTML strings in our code!

For starters, we are going to use [`_.template`](http://lodash.com/docs#template) from lodash.

The funciton takes 3 arguments:

* `text` with text and template placeholders
* `data` - an object where each `key` represent placeholders in `text`. Those keys are replaced by the given `value`
* `options` - optional argument for giving options to the template

__A basic usage is:__

```javascript
var p = "<p><%= name %></p>";
var pHtml = _.template(p, {
    name: "Ivan"
});

console.log(pHtml); // <p>Ivan</p>
```

__We can also do for-loops in the template by using the `_(arr).forEach` from lodash:__

```javascript
var
    items = ["Edno", "Dve", "Tri"],
    template = "<ul><% _(items).forEach(function(item) { %><li><%= item %></li><% }); %></ul>",
    parsedHtml = _.template(template, {
        items: items
    });

console.log(parsedHtml); // "<ul><li>Edno</li><li>Dve</li><li>Tri</li></ul>"
```
The important thing here to notice is the difference between `<%` and `<%=` in the template.
