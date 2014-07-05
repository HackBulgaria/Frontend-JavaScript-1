# UI for the Checkin system in Hack Bulgaria

As you know, in your profile in our system Odin. we are asking for a MAC address.

This is for our system to automatically track visits of each student.

Now, we are going to need UI to visualize the checkins and give a better perspective of how the system is working.

## Checkin API

For now, we have a very simple API that returns a fat JSON with all checkin data.

The API is located here - https://hackbulgaria.com/api/checkins/

The checkin object is very simple:

```json
{
    "date": "2014-06-05",
    "student_id": 303,
    "student_name": "Светимир Игнатов"
}
````

We can ignore the `student_id` field for now.

## Requirements for the UI

The requirements are not specific and this is part of the task. We are not sure how the system should look like but we believe you are fare more creative than us, so the general UI look and feel is up to you.

### Visits for each course for the different groups

One of the things we are going to need is a graph that shows the visists for every day, week and month for both of the courses.

There should be one graph per course and the graph should have options to switch between:

* Visits for a given day
* Visits for a given week
* Visits for a given month
* An option to show numbers only for late group, only for early group or both (For the selected day, week or month)

__Possible charting libraries that you can use (few of the many):__

* KendoUI - http://demos.telerik.com/kendo-ui/line-charts/index
* jQPlot - http://www.jqplot.com/
* ChartJS - http://www.chartjs.org/

### Individual visits

This is a separate page.

The UI should be able to select a student and display his individual visits for every lecture - wether he has been attending or not.

It is a good idea to use the table for displaying all students and the filtering functionallity.

Then click on a student and display his visits for the course up to now.

### Lectures are not every day

Keep in mind that the lectures are every Tuesday, Wednesday and Saturday! The rest of the days - there is nothing and is a good idea to disply nothing.
