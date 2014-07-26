# Students System


This is going to be our first frontend application:

* It fecthces data from the server
* It uses jQuery and Bootstrap
* It uses Bower and npm to manage dependencies

You have to finish the app and implement a few features.

## The Server side

In the `server` folder, you will find a very simple `server.js` script, that will start an HTTP server if you run it with `node`.

Examine the script - it returns a variable, holding an array of students.


In order to run the server, you will have to:

* Do `npm install` in the folder
* Do `node server.js` and open `http://localhost:3000/students`
* The port can be changed. You must see the result from the GET call.

This is everything.

__In order to have the data on the frontend, you must keep the server running.__

## The client

In the `client` folder, there are 3 very important files:

* `index.html` where the HTML for our application is
* `app.js` where the JavaScript for our application is
* `bower.json` where the dependencies (Bootstrap & jQuery) are described

In order to start the client, we have to follow two steps:

### Install bowwer & Install dependencies

[Bower](http://bower.io/) is a frontend package managin tool - Just like `npm` but for libraries that are used on the client side.

To install bower, you use npm (Keep in mind that you may need super user for that):

```
npm install -g bower
```

Once you have bower installed, go to the `client` folder and run the following command:

```
bower install
```

This will install all required dependencies for our application.

### Run the application on a local HTTP server - Apache

Since we are making HTTP calls (To get the data from the server) we need to run our application on a HTTP server.

__For that, we are going to use Apache!__ (Feel free to use whatever you want as long as you know what you are doing ;) )


### Installing Apache

You may want to follow this guide - https://help.ubuntu.com/10.04/serverguide/httpd.html


In order to install Apache, we run the following command:

```
sudo apt-get install apache2
```

Now open `http://localhost` - you have to see some default output from Apache.

### Locating the document root or Apache

In Apache, we have something called `DocumentRoot` - This is the location where Apache looks for files in order to display them via `localhost`

The default one is located in `/var/www/`

You have two options:

* Place your application in `/var/www/` and code there.
* Change your `DocumentRoot` to a destination, where you keep your code

To change your `DocumentRoot`, open with root the following file:

```
sudo vi /etc/apache2/sites-available/default
```

You will see `DocumentRoot` directives there - change it to the desired location on your system.

For example, mine looks like that (Look for `/home/radorado/code`)

```
<VirtualHost *:80>
    ServerAdmin webmaster@localhost

    DocumentRoot /home/radorado/code
    <Directory />
        Options FollowSymLinks
        AllowOverride None
    </Directory>
    <Directory /home/radorado/code/>
        Options Indexes FollowSymLinks MultiViews
        AllowOverride None
        Order allow,deny
        allow from all
    </Directory>

    ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/
    <Directory "/usr/lib/cgi-bin">
        AllowOverride None
        Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch
        Order allow,deny
        Allow from all
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/error.log

    # Possible values include: debug, info, notice, warn, error, crit,
    # alert, emerg.
    LogLevel warn

    CustomLog ${APACHE_LOG_DIR}/access.log combined

    Alias /doc/ "/usr/share/doc/"
    <Directory "/usr/share/doc/">
        Options Indexes MultiViews FollowSymLinks
        AllowOverride None
        Order deny,allow
        Deny from all
        Allow from 127.0.0.0/255.0.0.0 ::1/128
    </Directory>

</VirtualHost>
```

When you are done, restart Apache:

```
service apache2 restart
```

If everything is OK, open your client via `http://localhost/path-to-your-client` and you should see this:

![](https://raw.githubusercontent.com/HackBulgaria/Frontend-JavaScript-1/master/week1/students-system/readme-images/default_view.png)

## The task

Examine `index.html` and `app.js`

Your job is to finish the following features:

### Rendering table with the data from the server

This table is hardcoded in the HTML for an example.

Your first job is to take the `students` array and render the table using that data!

Each student is an object with 3 attributes:

```javascript
{
    "id" : 1,
    "name" : "Student",
    "course" "Frontend JavaScript"
}
```

Render a table with 3 columns, corresponding to the attributes of the object.

### Group by courses button - make it work!

After you have successfuly rendered the table from the data, examine `app.js` and finish the following code:

```javascript
$("#group-btn").on("click", function() {
  alert("What are you looking at? Go implement that logic.");
});
```

When the user clicks the button, do the following:

* Group the students by the course they are attending!
* If we have `n` different groups, render `n` different tables for each group

Consider this:

![](https://raw.githubusercontent.com/HackBulgaria/Frontend-JavaScript-1/master/week1/students-system/readme-images/grouped.png)

### Searching by name

The last thing we are going to do is to implement the search logic.

When the users clicks the search button, do the following:

* Take the input (see `app.js`) and search all students if the given name is matching or partially matching any of your students.
* If the name is matching, find the user in the table and make the row green, indicating that we have found our user
* If we are searching in grouped mode, with more than 1 table, do the same for each table :)

For making the row green, check this - http://getbootstrap.com/2.3.2/base-css.html#tables

An example view of the search:

![](https://raw.githubusercontent.com/HackBulgaria/Frontend-JavaScript-1/master/week1/students-system/readme-images/search.png)
