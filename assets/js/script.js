

/*************************************************
                    DOM VARIABLES 
**************************************************/
var display1 = $("#display1").append("Display 1");
var display2 = $("#display2").append("Display 2");
var display3 = $("#display3").append("Display 3");
var cities = $("#cities");

/*************************************************
                    VARIABLES AND CONSTANTS
**************************************************/
var urlBase = "http://api.openweathermap.org/";
var urlEnd = "&appid=5af7e440df7c59ead813eff5795179d2";


/*************************************************
                    HELPER FUNCTIONS
**************************************************/
// checks to see if there is a search history, if not asks user to do a search
function firstSearch(){
//  console.log("sampleFunction() called.");     /*
        // TODO: 
    
// */
    return true;    
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
  if (firstSearch()) { 
    display1.hide();   
  } else { 
    display2.hide(); 
  }

// */
}

/*************************************************
                    Button Listeners
**************************************************/
$("#searchBtn").on("click", function() {
    var searchCity = $("#searchCity").val();
    var request = urlBase + "data/2.5/weather?q=" + searchCity + urlEnd;
    fetch(request) 
    .then(response => response.json())
    .then(data => console.log(data));
    
});

