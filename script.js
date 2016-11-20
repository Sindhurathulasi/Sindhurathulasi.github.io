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
		$( ".portfolio" ).show().fadeIn();
	}, 4000);
	
	/** setTimeout(function(){
		$( "#logoAnimation" ).hide();
	}, 4000);
	setTimeout(function(){
		$( ".portfolio" ).fadein({opacity: '0.5'});
	}, 4000);
	
	**/
});