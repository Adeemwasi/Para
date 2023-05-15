var newsHeading = [
  '<li class="item1 news-li"><a href="https://www.google.com">ProQual Level 6 NVQ diploma in Occupational Heath and Safety. <b style="color: #222831 !important;">Click here.</b></a></li>',
  '<li class="item2 news-li"><a href="https://www.google.com">A range of short courses in Occupational Health and Safety. <b style="color: #222831;">Click here.</b></a></li>',
  '<li class="item3 news-li"><a href="https://www.google.com">Register with us as ISO management system auditors. <b style="color: #222831;">Click here.</b></a></li>',
];
var currentIndex = 0;
var animationInterval;
var secFadeInterval;

function secFade() {
  $(".news").fadeOut(250, function () {
    $(this)
      .html(newsHeading[currentIndex])
      .fadeIn(250, function () {
        secFadeInterval = setTimeout(secFade, 500);
      });
  });
}

function fadeNews() {
  $(".news").fadeOut(0, function () {
    $(this).html(newsHeading[currentIndex]).fadeIn(0);
    currentIndex = (currentIndex + 1) % newsHeading.length;
  });
}

function startAnimation() {
  stopAnimation(); // Clear any existing interval

  fadeNews();

  animationInterval = setInterval(fadeNews, 4000);
}

function stopAnimation() {
  clearInterval(animationInterval);
  clearTimeout(secFadeInterval);
}

startAnimation();

$(".news").mouseenter(stopAnimation).mouseleave(startAnimation);

$(".img-left")
  .off("click")
  .on("click", function () {
    currentIndex = (currentIndex - 1 + newsHeading.length) % newsHeading.length;
    $(".news").html(newsHeading[currentIndex]);
  });

$(".img-right")
  .off("click")
  .on("click", function () {
    currentIndex = (currentIndex + 1 + newsHeading.length) % newsHeading.length;
    $(".news").html(newsHeading[currentIndex]);
  });

$(".img-left, .img-right")
  .off("mouseenter mouseleave")
  .hover(
    function () {
      stopAnimation();
      clearTimeout(secFadeInterval);
    },
    function () {
      secFade();
    }
  )
  .mouseenter(function () {
    clearTimeout(secFadeInterval);
  });

$(document).ready(function () {
  var items = $(".item"); // Select all items with the "item" class
  var interval = 1000; // 1 second interval

  setInterval(function () {
    items.toggleClass("active"); // Toggle the "active" class on all items
  }, interval);
});

$(document).ready(function () {
  var items = $(".banner");
  var interval = 1000;

  setInterval(function () {
    items.toggleClass("pressed");
  }, interval);
});


$(document).ready(function () {
  var items = $(".img-left, .img-right");
  var interval = 1000;

  setInterval(function () {
    items.toggleClass("pressed2");
  }, interval);
});

$(document).ready(function () {
  var items = $(".list, .logo, .main-img");

  items.mouseenter(function () {
    $(this).addClass("pressed");
  });

  items.mouseleave(function () {
    $(this).removeClass("pressed");
  });
});
