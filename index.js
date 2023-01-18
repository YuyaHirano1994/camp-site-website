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

$(".title").on("click", function () {
  $(".box").slideUp(500);

  var findElm = $(this).next(".box");

  if ($(this).hasClass("close")) {
    $(this).removeClass("close");
  } else {
    $(".close").removeClass("close");
    $(this).addClass("close");
    $(findElm).slideDown(500);
  }
});

$(window).on("load", function () {
  $(".accordion-area li:first-of-type section").addClass("open");
  $(".open").each(function (index, element) {
    var Title = $(element).children(".title");
    $(Title).addClass("close");
    var Box = $(element).children(".box");
    $(Box).slideDown(500);
  });
});
