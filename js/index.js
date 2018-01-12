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
            document.getElementById("navLogoContainerImg").src = "img/garlicoinFullDark.png";
        } else {
            header.removeClass("scrolled");
            document.getElementById("navLogoContainerImg").src = "img/garlicoinFullLight.png";
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


var smolnav = document.getElementById('smallScreenNav');
window.onclick = function(event) {
    if (event.target == smolnav) {
        bars.style.display = "none";
    }
}
