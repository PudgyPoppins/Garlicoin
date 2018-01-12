$(function() {
    var header = $(".nav");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var garlicoinP = document.getElementById('navLogoContainerP');
        if (scroll >= 415) {
            header.addClass("scrolled");
            document.getElementById("navLogoContainerImg").src = "img/garlicoinFullDark.png";
            garlicoinP.style.color = "#333";
        } else {
            header.removeClass("scrolled");
            document.getElementById("navLogoContainerImg").src = "img/garlicoinFullLight.png";
            garlicoinP.style.color = "white";
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
        smolnav.style.display = "none";
    }
}
