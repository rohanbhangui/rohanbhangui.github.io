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

	// var shot3Offset = $(".writhem-radio #shot-3").offset();
	// $(window).scroll(function() {

	// 	console.log($(window).scrollTop());
	// 	if($(this).scrollTop() >= shot3Offset.top) {
	// 		$( ".writhem-radio #shot-3 .row .swipebox").first().show( "slow", function showNext() {
	// 			$( this ).next( ".writhem-radio #shot-3 .row .swipebox" ).show( "fast", showNext );
	// 		});
	// 	}
	// });

});

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}