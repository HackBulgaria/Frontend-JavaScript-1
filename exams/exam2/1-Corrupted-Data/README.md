# Corrupted Data

You are present with `data.json` file that represents checkins for a given period of time in our training hall.

Unfortunately, the data is corrupted - there are multiple checkins for one person for a given day, when there should be only 1 checkin per person per day.

It is your job to implement a JavaScript program (Run it with `node`) that prints out the duplicate checkins for a given day.

## Quick Tips

To get `data.json` inside your node script, it it as simple as:

```javascript
// this will load data.json on the same level as the script
var data = require("data");
// data now is a JS object
```

## Example result

Here is an example result of the script with `data.json`:

```
$ node app.js
{ pk: 280,
  model: 'students.checkin',
  fields: { date: '2014-06-05', mac: '00:24:d7:39:3a:8c', student: 22 } }
{ pk: 387,
  model: 'students.checkin',
  fields: { date: '2014-06-07', mac: 'e0:2a:82:aa:02:a1', student: 1 } }
{ pk: 429,
  model: 'students.checkin',
  fields: { date: '2014-06-10', mac: '00:24:d7:39:3a:8c', student: 22 } }
{ pk: 452,
  model: 'students.checkin',
  fields: { date: '2014-06-12', mac: '78:92:9c:2e:44:0a', student: 36 } }
{ pk: 577,
  model: 'students.checkin',
  fields: { date: '2014-06-26', mac: 'e0:2a:82:aa:02:a1', student: 1 } }
{ pk: 592,
  model: 'students.checkin',
  fields: { date: '2014-06-26', mac: 'e0:2a:82:52:52:a4', student: 5 } }
```
