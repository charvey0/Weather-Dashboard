

/*************************************************
                    DOM VARIABLES 
**************************************************/
var cities = $("#cities");
var current = $("#current");


/*************************************************
                    VARIABLES AND CONSTANTS
**************************************************/
var urlBase = "https://api.openweathermap.org/";
var urlEnd = "&appid=5af7e440df7c59ead813eff5795179d2&units=imperial";
var lat = "";
var lon = "";


/*************************************************
                    HELPER FUNCTIONS
**************************************************/
// checks to see if there is a search history, if not asks user to do a search
function lastSearch(){
//  console.log("sampleFunction() called.");     /*
    var history = JSON.parse(localStorage.getItem("history"));
    if (history === null) {
        $("#searchCity").val("Seattle");    
    } else {
        $("#searchCity").val(history[history.length-1]);    
    }
// */
}

function saveSearch(city){
//  console.log("sampleFunction() called.");     /*
    var history = JSON.parse(localStorage.getItem("history"));
    if (history === null) {
        history = [];
    } 
    if (!history.includes(city)) {
        history.push(city);
        localStorage.setItem("history", JSON.stringify(history));
    }
    displayHistory();
// */
}
    

function displayHistory() {
    var display = $("#history");
    display.empty();
    var history = JSON.parse(localStorage.getItem("history"));
    if (history === null) {
        return;
    } 
    for (var i=0 ; i<history.length ; i++) {
        display.prepend('<div class="city btn btn-success">'+history[i]+'</div>');
    }


    $(".city").on("click", function(e) {
        $("#searchCity").val(e.target.innerText);
        $("#searchBtn").click();
    });
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
        

// initializes the page by getting the last city added to the history and "clicks" the searchBtn
function init() {
//  console.log("function init() called;");     /*    
    lastSearch();
    $("#searchBtn").click();
// */
}

// displays the 5 day forecast
function display5day(city) {
    var request = urlBase + "data/2.5/forecast?q=" + city + urlEnd;
    var forecast = $("#forecast");
    forecast.empty();
    fetch(request)
    .then (response => response.json())
    .then (function (data) {
        for (var i=0 ; i<data.list.length ; i++) {
            var wDay;
            var formattedDate = new Date(data.list[i].dt_txt);
            var t = formattedDate.getHours();
            if (t == 12) {
                var day = formattedDate.getDay();
                switch (day) {
                    case 0:
                        wDay = "Sunday";
                        break;
                    case 1:
                        wDay = "Monday";
                        break;
                    case 2:
                        wDay = "Tuesday";
                        break;
                    case 3:
                        wDay = "Wednesday";
                        break;
                    case 4:
                        wDay = "Thursday";
                        break;
                    case 5:
                        wDay = "Friday";
                        break;
                    default:
                        wDay = "Saturday";    
                }
                var d = formattedDate.getDate();
                var m =  formattedDate.getMonth();
                m++;  // JavaScript months are 0-11
                var y = formattedDate.getFullYear();
                var html = `        <div class="card day-card">
                <img src="https://openweathermap.org/img/wn/`+ data.list[i].weather[0].icon +`@2x.png" alt="`+data.list[i].weather[0].description+`" class="card-img">
                <div class="card-body"><hr>
                  <h6 class="card-title">`;
                html += wDay+"<br>"+m+"/"+d+"/"+y;
                html += `</h6><hr>
                <div class="card-text">`
                html += "<p>Temp:<br>"+data.list[i].main.temp+" &deg;F</p>";
                html += `<p>Humidity:<br>`+data.list[i].main.humidity+`%</p>     

                </div>
        </div>
    </div>`;
                forecast.append(html);
            }
        }
    });
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
        if (data.cod == 200) {
            lat = data.coord.lat;
            lon = data.coord.lon;
            var html = `<h4 class="card-title">Current conditions in `+data.name+`:</h4>`;
            html += `<div class="row">
            <div class="col-sm-4">`;
            html += "<p>Temperature: "+data.main.temp+" &deg;F</p>";
            html += "<p>Humidity: "+data.main.humidity+"%</p>";
            html += `<p>Wind Speed: `+data.wind.speed+` MPH</p>
     </div>`;
            html += `<div class="col-sm-4">
            <img id="current_icon" src="https://openweathermap.org/img/wn/`+ data.weather[0].icon +`@2x.png" alt="`+data.weather[0].description+`" class="card-img">
            </div></div>`;
            current.append(html);
            getUV(lat, lon);
            saveSearch(data.name);
            display5day(data.name);
        } else {
            current.append("<h4 class='card-title'>Sorry, we could not find any information on "+searchCity+".</h4>");
            $("#forecast").empty();
        }

    });
});

