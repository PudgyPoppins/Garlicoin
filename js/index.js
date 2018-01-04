$(function() {
    var header = $(".nav");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 415) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
  
});

$(function() {
    var header = $(".navLogoContainer");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 415) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
  
});

$(".nav").scrollspy({ offset: -85 });

function on() {
	var x = document.getElementById("smallScreenNav");
	if (x.style.display === "flex") {
			x.style.display = "none";
	} else {
			x.style.display = "flex";
	}
}