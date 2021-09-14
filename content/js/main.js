const currentLocation = location.href;
const menuItem = document.querySelectorAll(".navbar-nav li a");
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "nav-link active";
  }
}
const video = document.getElementById("video");
const playIcon = document.getElementById("playIcon");

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    margin: 10,
    navText: ["", ""],
    // rewindNav : true,
    rtl: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: true,
        dots: false,
      },
      1000: {
        items: 1,
        nav: true,
        loop: false,
        dots: false,
      },
    },
  });
  var swiper = new Swiper(".mySwiper", {
    // slidesPerView: 3,
    spaceBetween: 40,
    centeredSlides: true,
    roundLength: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
  if ($(".contact-us-page").length > 0) {
    $("#myform").validate({
      // onfocusout: false,
      // onkeyup: true,
      rtl: true,
      rules: {
        username: {
          required: true,
          minlength: 5,
        },
        mobile: {
          required: true,
          minlength: 11,
        },
        area: {
          required: true,
          minlength: 50,
        },
      },
    });
  }
  if ($('.home-page').length > 0 ){
    // playvideo

    function togglePlay() {
      if (video.paused || video.ended) {
        video.play();
      } else {
        video.pause();
      }
    }
    playIcon.addEventListener("click", togglePlay);
    video.addEventListener("playing", function () {
      playIcon.style.opacity = 0;
    });
    video.addEventListener("pause", function () {
      playIcon.style.opacity = 1;
    });
  }
  if ($('.blog-page').length > 0 ){
    // playvideo

    function togglePlay() {
      if (video.paused || video.ended) {
        video.play();
      } else {
        video.pause();
      }
    }
    playIcon.addEventListener("click", togglePlay);
    video.addEventListener("playing", function () {
      playIcon.style.opacity = 0;
    });
    video.addEventListener("pause", function () {
      playIcon.style.opacity = 1;
    });
  }
});

$(".my-rating").starRating({
  starSize: 25,
  rtl: true,
  useFullStars: true,
  // ratedColor: orange,
  callback: function (currentRating, $el) {
    // make a server call here
  },
});