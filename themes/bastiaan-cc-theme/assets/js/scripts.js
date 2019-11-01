var html = document.querySelector('html')
var body = document.querySelector('body');

body.onscroll = function(e) {
    
    if (html.scrollTop > 100) {
        html.className = "scrolled";
    } else {
        html.className = "";
    }
    
}

window.onload = function() {
    window.setTimeout(function() {
        body.className = "enable-transitions " + body.className;
    }, 200)
}