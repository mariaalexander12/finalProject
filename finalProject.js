/*the fade in of my name not working
$(document).ready(function(){
    $("#center_text").hide(0).delay(450).fadeIn(3000)
});*/


//below code is not my own 
//(taken via codepen for drop down)
var theToggle = document.getElementById('toggle');


// hasClass
function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, " ") + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0) {
            newClass = newClass.replace(" " + className + " ", " ");
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
    toggleClass(this, 'on');
    return false;
}

//code above is not my own 
//code below is original 

//this delays & fades in txt on landing
$(document).ready(function() {
    $("#quote").hide(0).delay(450).fadeIn(3000)
});

//slide down feature to view resume 
$("#clickme").click(function() {
    $("#resume").slideDown("slow", function() {});
});

//project links
$("#got").on('click', function(){
     window.location = "https://github.com/mariaalexander12/GOT-Theories";    
});

$("#nycda").on('click', function(){
     window.location = "https://github.com/mariaalexander12/PersonalWebsite";    
});
