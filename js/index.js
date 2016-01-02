jQuery(function($){
	$(".nav-menu-compact").on("change", function(e) {
	    console.log($(this).find(":selected").attr("href"));
	    window.location.href = $(this).find(":selected").attr("href");
	});
});