var headerOffset  = 100;
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 750);
        return false;
      }
    }
  });
});

// A $( document ).ready() block.
$( document ).ready(function() {
	
	setTimeout(function(){
		$( "#logoAnimation" ).hide();
	}, 4000);
	
	setTimeout(function(){
		$( "#portfolio" ).show();
	}, 4000);
	
	/** setTimeout(function(){
		$( "#logoAnimation" ).hide();
	}, 4000);
	setTimeout(function(){
		$( ".portfolio" ).fadein({opacity: '0.5'});
	}, 4000);
	
	**/
});

/** HEADER HIDE AND SHOW **/

$(window).scroll(function(){
//    console.log("$(window).scrollTop(",$(window).scrollTop())
    $(".scroll").css("opacity", 1 - $(window).scrollTop() / 175);
    $(".intro").css("opacity", 1 - $(window).scrollTop() / 175);
    
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > (currentScrollPos-5)) {
    document.getElementById("header-wrap").style.top = "0";
      if(screen.width < 420){
          document.getElementById("header-wrap").style.height = "117px";
      }
  } else {  
    document.getElementById("header-wrap").style.top = "-117px";
  }
  prevScrollpos = currentScrollPos;
}


$(document).ready(function(){
    $("#work").click(function(){
        $("#work").toggle();
    });
});
