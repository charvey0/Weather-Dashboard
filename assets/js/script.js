

/*************************************************
                    DOM VARIABLES 
**************************************************/

var title = $("#title").html("Title");
//var navBar = $("#navbar");
var navBrand = $("#navBrand").html("Title");
var nav1 = $("#nav-link-1").html("Nav Link 1");
var nav2 = $("#nav-link-2").html("Nav LInk 2");
var nav3 = $("#nav-link-3").html("Nav Link 3");
var display1 = $("#display1").append("Display 1");
var display2 = $("#display2").append("Display 2");
var display3 = $("#display3").append("Display 3");
var main = $("#main");
//var footer = $("#footer");
//var copyright = $("#copyright");


/*************************************************
                    VARIABLES AND CONSTANTS
**************************************************/




/*************************************************
                    HELPER FUNCTIONS
**************************************************/
// INPUT: 
// OUTPUT: 
function sampleFunction(){
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
    $(".nav-link").removeClass("active");
    nav1.addClass("active");
    display1.show();
    display2.hide();
    display3.hide();
//        next();
// */
}

/*************************************************
                    Nav Link Listeners
**************************************************/

nav1.on("click", function(e) {
     $(".nav-link").removeClass("active");
     display1.show();
     display2.hide();
     display3.hide();
     nav1.addClass("active");
});

nav2.on("click", function(e) {
    $(".nav-link").removeClass("active");
    display1.hide();
    display2.show();
    display3.hide();
    nav2.addClass("active");
});

nav3.on("click", function(e) {
    $(".nav-link").removeClass("active");
    display1.hide();
    display2.hide();
    display3.show();
    nav3.addClass("active");
});

navBrand.on("click", function(e) {
    init();
});