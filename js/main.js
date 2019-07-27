$(document).ready(function() {
  // hamburger menu animation
  $(".nav-button").click(function() {
    $(".nav-button").toggleClass("change");
  });

  // hero text animation
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 200) {
      $(".nav-menu").addClass("custom-navbar");
    } else {
      $(".nav-menu").removeClass("custom-navbar");
    }
  });

  // mission animation
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 750) {
      $(".camera-img").addClass("fromLeft");
      $(".mission-text").addClass("fromRight");
    } else {
      $(".camera-img").removeClass("fromLeft");
      $(".mission-text").removeClass("fromRight");
    }
  });

  // gallery filter function
  $(".gallery-list-item").click(function() {
    let value = $(this).attr("data-filter");
    if (value === "all") {
      $(".filter").show(1200);
    } else {
      $(".filter")
        .not("." + value)
        .hide(1200);
      $(".filter")
        .filter("." + value)
        .show(1200);
    }
  });

  // active item gallery filter
  $(".gallery-list-item").click(function() {
    $(this)
      .addClass("active-item")
      .siblings()
      .removeClass("active-item");
  });

  // card animations
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 4800) {
      $(".card-1").addClass("moveFromLeft");
      $(".card-3").addClass("moveFromRight");
      $(".card-2").addClass("moveFromBottom");
    } else {
      $(".card-1").removeClass("moveFromLeft");
      $(".card-3").removeClass("moveFromRight");
      $(".card-2").removeClass("moveFromBottom");
    }
  });
});
