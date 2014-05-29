# Problems to solve with JavaScript

We are going to code in pure JavaScript in order to solve some coding problems.
We are also going to implement unit tests for that, using `nodeunit` - https://github.com/caolan/nodeunit


## Installing nodeunit

Nodeunit is a unit-testing framework for NodeJS.

To install it, simply run:

```
$ sudo npm install -g nodeunit
```

In the folder, there are two files - `factorial.js` and `factorial-test.js`.

Open and examine their structure. In order to run the unit test, type:

```
$ nodeunit factorial-test.js
```

You will see the following output:

```
factorial-test.js
✔ testFactorialForZero
✔ testFactorialForFive

OK: 2 assertions (8ms)
```
