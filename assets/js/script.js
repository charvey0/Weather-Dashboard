

/*************************************************
                    DOM VARIABLES 
**************************************************/
var display1 = $("#display1").append("Display 1");
var display2 = $("#display2").append("Display 2");
var display3 = $("#display3").append("Display 3");
var cities = $("#cities");
var current = $("#current");

var lat = "";
var lon = "";

/*************************************************
                    VARIABLES AND CONSTANTS
**************************************************/
var urlBase = "https://api.openweathermap.org/";
var urlEnd = "&appid=5af7e440df7c59ead813eff5795179d2&units=imperial";


/*************************************************
                    HELPER FUNCTIONS
**************************************************/
// checks to see if there is a search history, if not asks user to do a search
function lastSearch(){
//  console.log("sampleFunction() called.");     /*
    var history = JSON.parse(localStorage.getItem("history"));
    if (history == undefined) {
        $("#searchCity").val("Seattle");    
    } 
    $("#searchCity").val(history[history.length-1]);    
// */
}
    
// looks up the UV index then returns the div to be displayed
function getUV(lat, lon) {
    var html = '<p>UV Index: ';
    var request = urlBase + "data/2.5/uvi?lat=" + lat + "&lon=" + lon + urlEnd;
    fetch (request)
    .then(response => response.json())
    .then(function (data) {
        var uv = data.value;
        if (uv<3){
            html += "<span class='btn btn-success'>";
        } else if (uv >=7 ) {
            html += "<span class='btn btn-danger'>";
        } else {
            html += "<span class='btn btn-warning'>";
        }
        html += uv;
        html += '</span></p>';
        current.append(html);
    });
}
        

/*************************************************
                    USER INTERACTION FUNCTIONS
**************************************************/
// DISPLAYS:
// WAITING FOR:
// NEXT:
function sampleState() {
//  console.log("function sampleState() called;");   /*    
        // TODO:

// */
}

// DISPLAYS: the opening screen
// WAITING FOR: user to push the "Begin" button
// NEXT: next()
function init() {
//  console.log("function init() called;");     /*    
  display3.hide();
  if (lastSearch()) { 
    display1.hide();   
  } else { 
    display2.hide();
  }
  $("#searchBtn").click();
// */
}

/*************************************************
                    Button Listeners
**************************************************/
$("#searchBtn").on("click", function() {
    current.empty();
    var searchCity = $("#searchCity").val();
    var request = urlBase + "data/2.5/weather?q=" + searchCity + urlEnd;
    fetch(request) 
    .then(response => response.json())
    .then(function (data) {
       lat = data.coord.lat;
       lon = data.coord.lon;
       var html = '<h4 class="card-title">Current conditions in '+data.name+':</h4>';
       html += "<p>Temperature: "+data.main.temp+" &deg;F</p>";
       html += "<p>Humidity: "+data.main.humidity+"%</p>";
       html += "<p>Wind Speed: "+data.wind.speed+" MPH</p>";
       current.append(html);
       getUV(lat, lon);
       saveSearch(data.name);
    });
});

