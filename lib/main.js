"use strict";

//func for changing background menu black or transparent
function MenuBgChanger() {
  if (window.scrollY > 80) {
    $("header").addClass("active");
  } else {
    $("header").removeClass("active");
  }
}

function ToggleMenuLinksActiveClass(params) {
  var scrollPos = $(document).scrollTop();
  $('#large-screen .menu a, #small-screen nav a').each(function () {
    var currLink = $(this);
    var currHref = $(this).attr("href");
    var section = $(currLink.attr("href"));

    if (section.position().top - 60 <= scrollPos && section.position().top + section.height() + 60 > scrollPos) {
      $('#large-screen .menu li').removeClass("active");
      $("#small-screen nav li").removeClass("active");
      currLink.parent().addClass("active");
      $("#large-screen .menu li a[href=\"".concat(currHref, "\"]")).parent().addClass("active");
    } else {
      currLink.parent().removeClass("active");
    }
  });
}

window.onscroll = function (e) {
  MenuBgChanger();
  ToggleMenuLinksActiveClass();
}; //change menu links active class when page scrolled


$(document).on("scroll", function (params) {
  ToggleMenuLinksActiveClass();
});
$(document).ready(function () {
  //preloader
  $(".preloader").fadeOut(); // ToggleMenuLinksActiveClass()

  MenuBgChanger(); //scroll to selected section when clicked menu links and toggle active class

  var menuLinks = document.querySelectorAll('header .menu a');
  menuLinks.forEach(function (link) {
    $(link).on("click", function (e) {
      // $("header .menu li.active").removeClass("active")
      // $(this).parent().addClass("active")
      var anchor = $(this);
      $("html, body").animate({
        scrollTop: $(anchor.attr('href')).offset().top - 50
      }, 1500);
      e.preventDefault();
    });
  }); //scroll up doc 

  $("#toUp").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, 1500);
  }); //when small screen menu opened bar should be move to left 

  $("#small-screen .bar").on("click", function (e) {
    if ($(this).next().hasClass("active")) {
      $(this).next().removeClass("active");
      $(this).removeClass("active");
    } else {
      $(this).next().addClass("active");
      $(this).addClass("active");
    }
  }); //team owl carousel

  $('#experts .owl-carousel').owlCarousel({
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  }); //testimonials owl carousel

  $('#testimonials .owl-carousel').owlCarousel({
    responsiveClass: true,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  });
});