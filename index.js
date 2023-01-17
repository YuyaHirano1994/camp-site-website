$(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".globalMenuSp").addClass("active");
    } else {
      $(".globalMenuSp").removeClass("active");
    }
  });
});

$('#nav_item a[href*="#"]').click(function () {
  var elmHash = $(this).attr("href");
  var pos = $(elmHash).offset().top;
  $("body,html").animate({ scrollTop: pos }, 500);
  return false;
});

function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
    $("#page-top").removeClass("DownMove");
    $("#page-top").addClass("UpMove");
  } else {
    if ($("#page-top").hasClass("UpMove")) {
      $("#page-top").removeClass("UpMove");
      $("#page-top").addClass("DownMove");
    }
  }
}

$(window).scroll(function () {
  PageTopAnime();
});

$(window).on("load", function () {
  PageTopAnime();
});

$("#page-top a").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    500
  );
  return false;
});
