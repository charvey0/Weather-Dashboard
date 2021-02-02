# Weather Dashboard

## Description
This application allows a user to search a database for current weather conditions in cities.  When the user first opens the app, the history is used to find the last added city.  If it is the user's first time, Seattle is added (because everyone wants to see the weather in Seattle!).

After a search is complete, the app checks to see if the city is already in the search history.  If it is not in the history, then the city is added to the end.

In addition to the current weather conditions, a five day forecast is displayed for the chosen city as well as a list of previously searched cities.  Clicking on a city in the list will result in displaying current conditions and the five day forecast for that city.

## Technologies
I used JavaScript and jQuery to provide interactivity and the OpenWeather API to fetch the information about the weather.


## What I learned:

* I learned how to interact with a server-side API
* How to build a front-end first, then add one functional piece at a time
* I gained a lot of experience working with Bootstrap cards

## What I want to know more about:

* jQuery - specifically dynamically building html elements with $("\<div\>").addClass("container").text("Some text here.");
* Bootstrap - still needing to look up just about everything, but I am remembering what is possible.
* Objects - this seems like it is going to be powerful...

## What I struggled with:

* This assignement was EXACTLY on the right level.  Always challenging and never discouraging.  I had a productive struggle beginning to end.
* spelling forecast - seriously, I spent about 40 minutes debugging because I kept using the /forcast endpoint!
* I had a difficult time navagating the OpenWeather API to find the UV Index.
 
## Functionality Demonstration

### Picture
![Weather Dashboard in action](./Assets/Weather-Dashboard.png)

### Video
[![Weather Dashboard Demonstration](https://img.youtube.com/vi/8QyREr_MKwg/0.jpg)](https://www.youtube.com/watch?v=8QyREr_MKwg)

### Deployment
Click [here](https://charvey0.github.io/Weather-Dashboard/) to go to the GitHub Page.
