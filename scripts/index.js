$(document).ready(function () {
  $(".shots img").on("click", function () {
    console.log($(this).attr("src"));
    $("body").prepend("<div class='modal-container'><img src='" + $(this).attr("src") + "' /></div>");
    $(".modal-container").fadeIn();
  });

  $("body").on('click','.modal-container', function(e) {
    if (!$(e.target).is('img')) {
      $(".modal-container").fadeOut();
    }
  });
});