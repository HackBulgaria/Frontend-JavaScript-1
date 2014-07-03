# A simple CRUD application for Students

We are going to start making CRUD applications using JavaScript and AJAX.

CRUD stands for - Create, Read, Update, Delete.

We are going to have one object - a Student.

We are going to implement all of the CRUD functionalities for a Student:

* Create new student
* Update existing student
* List all students
* Delete existing student

## A Student model

The `Student` model is very simple:

* `name`  - a string
* `facultyNumber` - an unique field that is a string
* `courses` - a list of strings

Once saved in mongo, a `_id` field is going to appear to every student.

__We are not using this `_id` in the server, because the `facultyNumber` is the unique id here.__

## Setting things up and running the server

1. The one big requirement for the server is to have __mongodb__ installed & running - http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/
2. You have to run `npm install` in the `server` folder
3. To start the server, run `node server.js` - the server will run on port 3030 by default

The server represents a simple API that writes in a mongodb database.

## Server API

There are few endpoints:

* `GET /students` - returns a list of all students
* `GET /student/:facultyNumber` - returns JSON for a specific student by a given `facultyNumber`. For example: `GET /student/80458`
* `POST /student` - creates a new student. The server expects the following JSON paylod in the body:
```json
{
    "name": "Radoslav Georgiev",
    "facultyNumber": "80458",
    "courses": ["Calculus", "Algebra", "Algorithms", "Functional Programming"]
}
```
* `POST /student` also updates an existing student. If you give a paylod with a `facultyNumber` that is already in the database, all other fields will be updated accordingly
* `DELETE /student/:facultyNumber` - deletes an existing student. All that is require is to send a `DELETE` request with a `facultyNumber` in the url. You can see in `data/delete_sample.sh` example curl call.

## What you have to do?

You have to implement the entire client, that handles the creation, listing, updating and deleting of a student.

__How everything is going to be layed out and what libraries to use is up to you!__

Good luck.
