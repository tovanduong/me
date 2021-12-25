$(document).ready(function () {
  $(".nexttoSection").on("click", function (e) {
    e.preventDefault();
    var getId = $(this).attr("href");
    var getOffsetTop = $(getId).offset();
    console.log(getOffsetTop);
    $("html, body").animate({ scrollTop: getOffsetTop.top }, 200);
  });
  $(".nexttoSection1").on("click", function (e) {
    e.preventDefault();
    var getId = $(this).attr("href");
    var getOffsetTop = $(getId).offset();
    console.log(getOffsetTop);
    $("html, body").animate({ scrollTop: getOffsetTop.top }, 200);
  });
  $(".nexttoSection2").on("click", function (e) {
    e.preventDefault();
    var getId = $(this).attr("href");
    var getOffsetTop = $(getId).offset();
    console.log(getOffsetTop);
    $("html, body").animate({ scrollTop: getOffsetTop.top }, 200);
  });
  $(".nexttoSection3").on("click", function (e) {
    e.preventDefault();
    var getId = $(this).attr("href");
    var getOffsetTop = $(getId).offset();
    console.log(getOffsetTop);
    $("html, body").animate({ scrollTop: getOffsetTop.top }, 200);
  });
  $(".nexttoSection4").on("click", function (e) {
    e.preventDefault();
    var getId = $(this).attr("href");
    var getOffsetTop = $(getId).offset();
    console.log(getOffsetTop);
    $("html, body").animate({ scrollTop: getOffsetTop.top }, 200);
  });
  
  var check = false;
  $(window).scroll(function (e) {
    var top = $(this).scrollTop() + $(window).height() - 200;
    console.log(top);

    var getOffset = $("#html").offset().top;

    if (top >= getOffset) {
      if (check == false) {
        $("#html").addClass("run");
        $("#Javascript").addClass("run1");
        $("#ReactJS").addClass("run2");
        $("#SQL").addClass("run3");
      }

      check = true;
    }
  });
  var btn = $("#button");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
});
