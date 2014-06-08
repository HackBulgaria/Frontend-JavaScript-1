# Chaining dropdowns and listing students

Open `index.html` in your browser - you will see two drop-down menus (`<select>` in HTML).

Also, there is a `server` folder with a simple NodeJS app, that returns a list of students.

## Running the server

To run the server, you will have to do the following things:

* Go to the `server` folder
* Run `npm install` command
* Run `node server.js` command and don't exit the process
* Open `http://localhost:3000/students` - you should see a list of students displayed as a JSON value.

## What you have to do?

You will have to make the page to work with the data, fetched from the server.

* First of all, you will have to fetch the data from the server. You can see how we are doing it in the [students system](https://github.com/HackBulgaria/Frontend-JavaScript-1/blob/master/week1/students-system/client/app.js#L6)
* After this, populate the first drop-down menu with the available courses.
* __The second drop-down menu should contain only the students for the course, selected in the first drop-down.__
* Below the drop-downs, it should be displayed the name and the GitHub account of the student

By changing the course - change the drop-down with the students accordingly.
