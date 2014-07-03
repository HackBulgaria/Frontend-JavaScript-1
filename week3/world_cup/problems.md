World Cup Problem
======

World cup, world cup, world cup.... everybody is watching the world cup. So we got a public, real time, JSON information about the world cup. http://worldcup.sfg.io/

We are going to use that data to make a football application. 

##1. First of all make a github repo.
Easy one! Make a tiny github repo and add your partner to it. Give him premission to commit.
```
Repo page -> Settings -> Collaborators
```

##2. Make a simple html structure for your page. It shoud look like this:
![World Cup Problem Hack Bulgaria](screenshot.png?raw=true)
User twitter bootstrap!
You dont have to make it exactly the same.

##3 . List all matches for today.
You have the information about todays matches here http://worldcup.sfg.io/matches/today for every match you have to generate a new block with information about the match.

If you want to see the json in better format download json-formatter for your chrome brouser.

```
<div class="jumbotron" style="height: 250px;">
    ---
</div>
```

Use the template language form handlebars.js to make a separate box for every match.

##4. Show flags for countries
In this repo you have a /flags/ dir full of flags .png-s. Display the correct flag for the country in the box like it is shown in the screenshot.

##5. Get more information and dispaly it in the popover
http://worldcup.sfg.io/teams/results Here you have much information about every team. Collect this information and make sentance like the example

 
"__Bulgaria__ is in __A__ group. With __2__ wins, __0__ losses and __5__ games played"

show this text in the popover for every contry that is going to play today.

## 6. Has the match started yet? 
http://worldcup.sfg.io/matches/today look at the ``datetime`` var here. If it is in the feature display this text: 
```
Match starts at: 13:00h
```

If the ``datetime`` is in the past display a progress bar:
```
<div class="progress progress-striped active">
  <div class="progress-bar"  role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 45%">
    <span class="sr-only">45% Complete</span>
  </div>
</div>
```
If the match have started 45 minutes ago you have to show 50%. Convert minutes to percentages using a basic math from school.

## 7. Show the result if the match has started.
```
<span class="score lead">1</span>
```
Load that value form the json. If the match has not started yet, don't show anything.

## 8. Team information
You don't have to a screenshot for that. Use the power to make a separate page for every team, that shows information about team's matches. Look closely to the API and decide how to implement that. Make the interface as nice as possible. 

## 9. Compare Teams
Make a separate page for comparing teams. You may add more then 2 teams. Choose them with drop down menus. Make the green and red coloring while comparing.
![World Cup Problem2 Hack Bulgaria](screenshot2.png?raw=true)
