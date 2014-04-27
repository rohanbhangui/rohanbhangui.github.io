
$(document).ready(function () {

  $(window).on("load", function() {
    $(window).scrollTop(0);
    $(".slidedown").fadeIn();
  });

  function deepLink(id, name, content) {
    history.pushState( {
      link_id: 1,
      link: name
    }, null, content);

    $(".modal .modal-content").load(content);
  }

/*  $('#portfolio').blurjs({
    source: 'body',
    radius: 7,
    overlay: 'rgba(255,255,255,0.4)'
  });*/

  $(".projects .project a[href*='portfolio']").on("click", function (e) {
    e.preventDefault();

    var id = $(this).parent().index() + 1;

    var name = $(this).attr("href").replace("/portfolio/","").replace("/","");

    var pathToContent = $(this).attr("href");

    deepLink(id, name, pathToContent);

    $("body").css("overflow", "hidden");
    $(".modal").css("overflow", "auto");
    $(".modal").fadeIn();
  });
  
  $(".modal-backbutton").on("click", function(e) {
    deepLink(0, "mainpage", "/");
    $(".modal").css("overflow", "hidden");
    $("body").css("overflow", "auto");
    $(".modal").fadeOut();
  });


  $(window).scroll(function() {
    
    //for the slidedown button
    if($(window).scrollTop() == 0)
    {
      $(".slidedown").addClass("bounce");
    }
    else if($(window).scrollTop() != 0)
    {
      $(".slidedown").removeClass("bounce");
    }
    
    if ($(window).scrollTop() > $(document).height() - $(window).height()*1.25)
    {
      $(".slidedown").addClass("slidedown-alt");
    }
    else
    {
      $(".slidedown").removeClass("slidedown-alt");
    }
  });

  //cycle through pages using slidedown button
  $(".slidedown").on("click", function () {
    if(!$(".slidedown").hasClass("animating"))
    {
      var win = $(window).scrollTop();
      var closest = false;
      var page = false;
      console.log('-start-');
      // Calculate closest section
      if(win >= $('section:last').offset().top) {
          // Loop back to section 1 if we're on the last section
          page = 0;
          $(".slidedown").addClass("bounce");
      }
      else {
        $('section').each(function(index, value) {
          // Get distance between window position and this section
          var difference = Math.abs(win - $(this).offset().top)
          console.log('distance to section #' + index + ': ' + difference);
          // Set the closest page
          if(difference < closest || !closest) {
            closest = difference;
            page = index;
          }
        });
      }

      if(page == 3)
      {
        $(".slidedown").addClass("slidedown-alt");
      }

      var scrollPos = $('section:nth-child(' + parseInt(page + 1) + ')').offset().top;

      $(".slidedown").addClass("animating");
      $('html, body').stop().animate({
        scrollTop: scrollPos
      }, 1000, function() {
        $(".slidedown").removeClass("animating");
      });
    }
  });
});