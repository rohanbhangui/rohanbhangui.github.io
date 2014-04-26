$(document).ready(function () {
  
  $("body").prepend("<div class='modal-container'></div>");

  $(".shots img").on("click", function () {
    $(".modal-container").html("<img src='" + $(this).attr("src") + "' />");
    $("body").css("overflow", "hidden");
    $(".modal-container").css("overflow", "auto");
    $(".modal-container").fadeIn();
  });
  
  $("body").on('click','.modal-container', function(e) {
    if (!$(e.target).is('img')) {
      $(".modal-container").css("overflow", "hidden");
      $("body").css("overflow", "auto");
      $(".modal-container").fadeOut();
    }
  });
});