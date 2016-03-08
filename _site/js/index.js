jQuery(function($){
	$(".nav-menu-compact").on("change", function(e) {
	    console.log($(this).find(":selected").attr("href"));
	    window.location.href = $(this).find(":selected").attr("href");
	});

	$( '.swipebox' ).swipebox({
		beforeOpen: function() {
			$("body").addClass("lightbox-active");
		},
		afterClose: function() {
			$("body").removeClass("lightbox-active");
		}
	});

	//for writhem radio
	var pageDelay = 1500;
	$(window).on("load", function() {
		$(".writhem-radio .project-title").delay(pageDelay).addClass("animated fadeInUp").queue(function(next){
		    $(".project-subtitle").addClass("animated fadeInUp");
		});
	});
});