$(document).ready(function () {
  $(".shots img").on("click", function () {
    console.log($(this).attr("src"));
    //$("body").prepend("<div class='modal-container'></div>");
  });
});